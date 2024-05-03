import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appConstructive]',
  standalone: true
})
export class ConstructiveDirective {
  setConstructiveContent: any;
  @Input('appConstructive') set appIfNot(showConstructiveContent: boolean){
      if(!showConstructiveContent){
        this.viewContainer.clear()
      }else{
        this.viewContainer.createEmbeddedView(this.templateRef)
      }
  }


  constructor(private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef) { }


}
