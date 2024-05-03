import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PostComponent } from '../post/post.component';
import { Articles2Component } from '../articles2/articles2.component';
import { CustomDirective } from '../diretives/custom.directive';
import { ConstructiveDirective } from '../diretives/constructive.directive';
import { CustomPipe } from '../pipes/custom.pipe';
import { AsyncPipe, SlicePipe } from '@angular/common';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { FormComponent } from '../form/form.component';
import { HttpClientModule } from '@angular/common/http';
import { CustomService } from '../services/custom.service';
import { Observable } from 'rxjs';
import { CustomMainService } from '../services/customMain.service';

@Component({
  selector: 'app-article',
  standalone: true,
  imports: [
    RouterOutlet,
    PostComponent,
    ArticleComponent,
    Articles2Component,
    CustomDirective,
    ConstructiveDirective,
    CustomPipe,
    SlicePipe,
    AsyncPipe,
    NzButtonModule,
    FormComponent,
    HttpClientModule
  ],
  providers:[CustomService],
  template: `<div class="article">Article works, {{name}}!</div>
              <app-post ></app-post>
              <br />
              <hr />
              <span [appCustom]="directiveValue">Проверка дерективы</span>
              <br />
              <div>Проверка pipe1: {{str | custom | slice: 0 : 4 }}</div>
              <div>Проверка pipe2: {{customPromise | async | slice: 0 : 4}}</div>
              <div>Проверка pipe3: {{customObservable | async}}</div>
              <span *appConstructive="showConstructiveContent">Проверка конструктивной дерективы</span>
              <br />
              <div style="margin: 8px">Counter: {{customService.counter}}</div>
              <button nz-button nzType="primary" style="margin: 8px" (click)="customService.increaseCounter()" >Increase counter</button>
              <button nz-button nzType="primary" (click)="customService.decreaseCounter()" >Decrease counter</button>
              <br />
              <div style="margin: 8px">Counter: {{customMainService.counter}}</div>
              <button nz-button nzType="primary" style="margin: 8px" (click)="customMainService.increaseCounter()" >Increase counter</button>
              <button nz-button nzType="primary" (click)="customMainService.decreaseCounter()" >Decrease counter</button>
              <app-form></app-form>
  `,
  styles: `.article {
    background-color: blue;
    color: white
  }`
})
export class ArticleComponent {
  name = 'Valentin'
  constructor (public customService: CustomService, public customMainService: CustomMainService) {}
  directiveValue='asdas'
  showConstructiveContent = false
  str = "test string"
  customPromise = Promise.resolve(this.str)
  customObservable = new Observable((subscriber) => {
    let count = 0
    setInterval(() => subscriber.next(count++), 1000);
  });

  setConstructiveContent (cond:boolean){
    this.showConstructiveContent = cond;
  }

  ngOnInit(){
    setInterval(() => {
      this.setConstructiveContent(!this.showConstructiveContent)
    }, 1000)
  }
}
