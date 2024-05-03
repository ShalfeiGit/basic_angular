import { Component, Provider } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { AsyncPipe, SlicePipe } from '@angular/common';
import { Observable } from 'rxjs';

import { PostComponent } from './post/post.component';
import { ArticleComponent } from './article/article.component';
import { Articles2Component } from './articles2/articles2.component';
import { CustomDirective } from './diretives/custom.directive';
import { ConstructiveDirective } from './diretives/constructive.directive';
import { CustomPipe } from './pipes/custom.pipe';
import { CustomService } from './services/custom.service';
import { CustomMainService } from './services/customMain.service';
import { FormComponent } from './form/form.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
  ],
  providers:[],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
 
}
