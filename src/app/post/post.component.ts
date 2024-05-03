import { NgClass, NgIf, NgStyle, NgSwitch, NgSwitchCase, NgSwitchDefault, NgFor, DatePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [
    FormsModule,
    NgStyle,
    NgClass,
    NgIf,
    NgSwitch,
    NgSwitchCase,
    NgSwitchDefault,
    NgFor,
    DatePipe
  ],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss'
})
export class PostComponent {
  titleValue = '';
  titlePlaceholder = 'input title';
  textValue = '';
  textPlaceholder = 'input text';
  countPlaceholder = 'input count';
  countValue = 0;
  toggle: boolean | null=true;
  array=['one', 'two', 'three', 'four', 'five', 'six' ];
  showNowTime = new Date();


  handleTitle(event: Event){
    this.titleValue = (<HTMLInputElement>event.target).value;
  }
  handleText(value: string){
    this.textValue = value;
  }

  handleButtonClick1(){
    this.toggle = !this.toggle;
  }
  handleButtonClick2(){
    this.toggle = null;
  }
}
