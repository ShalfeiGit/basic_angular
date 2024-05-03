import { Directive, ElementRef, HostListener, OnInit, Renderer2, Input, HostBinding } from '@angular/core';

@Directive({
  selector: '[appCustom]',
  standalone: true
})
export class CustomDirective implements OnInit {
  @Input('appCustom') 
  text!: string

  @HostBinding('style.fontSize') 
  fontSizeEl: string | null = null;

  constructor(private el: ElementRef, private r: Renderer2) { 
  }
  
 
  ngOnInit(): void {
    console.log(this.el.nativeElement.textContent)
    console.log(this.text)
    this.el.nativeElement.style.color = 'blue'
    this.r.setStyle(this.el.nativeElement, 'fontWeight', '700')
    this.fontSizeEl = '40px'
  }

  @HostListener('mouseenter', ['$event'])
  handleMouseEnter(e: Event){
    console.log(e)
    this.r.setStyle(this.el.nativeElement, 'color', 'red')
  }

  @HostListener('mouseleave', ['$event'])
  handleMouseLeave(e: Event){
    this.r.setStyle(this.el.nativeElement, 'color', 'blue')
  }

}
