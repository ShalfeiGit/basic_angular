import { Component, Input, OnChanges, OnDestroy, OnInit, Provider } from '@angular/core';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzDividerModule } from 'ng-zorro-antd/divider';

export interface IPost {
  text: string;
  title: string;
  id: number
}

@Component({
  selector: 'app-article2',
  standalone: true,
  imports: [NzCardModule, NzDividerModule],
  templateUrl: './article2.component.html',
  styleUrl: './article2.component.scss'
})
export class Article2Component  implements OnChanges, OnDestroy, OnInit  {
  @Input() post!: IPost
  ngOnChanges(){
    console.log('onChange')
  }
  ngOnInit(){
    console.log('onInit')
  }
  ngOnDestroy(){
    console.log('onDestroy')
  }
}
