import { NgClass } from '@angular/common';
import { Component, EventEmitter, Output, Input, ViewChild, ElementRef, ContentChild} from '@angular/core';
import { NzSizeLDSType } from 'ng-zorro-antd/core/types';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { IPost } from '../article2/article2.component';

@Component({
  selector: 'app-post2',
  standalone: true,
  imports: [NzInputModule, NzButtonModule, NgClass],
  providers: [],
  templateUrl: './post2.component.html',
  styleUrl: './post2.component.scss'
})
export class Post2Component {
  @ViewChild('inputTitleElement') inputTitleRef!: ElementRef;
  @ViewChild('inputTextElement') inputTextRef!: ElementRef;
  @ContentChild('divElement') divRef!: ElementRef;
  @Input() posts!: IPost[]
  @Output() addPost: EventEmitter<IPost> = new EventEmitter<IPost>();
  @Output() clearPosts: EventEmitter<null> = new EventEmitter<null>();

  title: string = '';
  text: string = '';
  size: NzSizeLDSType = 'small'

  inputTitle(event: Event): void {
    this.title = (<HTMLInputElement>event.target).value;
  }

  inputText(event: Event): void {
    this.text = (<HTMLInputElement>event.target).value;
  }

  handleClickButton(){
    this.addPost.emit({title: this.title, text: this.text, id: this.posts.length + 1 })
  }

  handleClearButton(){
    this.clearPosts.emit()
    this.inputTitleRef.nativeElement.value = ''
    this.inputTextRef.nativeElement.value = ''
  }

  handleFocusElement(){
    this.inputTitleRef.nativeElement.focus();
    console.log(this.divRef.nativeElement.textContent )
  }

}
