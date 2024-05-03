import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { NzButtonModule } from 'ng-zorro-antd/button';

@Component({
  selector: 'app-error-page',
  standalone: true,
  imports: [NzButtonModule, RouterModule],
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.scss']
})
export class ErrorPageComponent {
  constructor(private router: Router) { }

  handleRedirectToStartPage(){
    this.router.navigate(['/article/44'], {
      queryParams:{
        like: true
      },
      fragment: 'fragmnet'
    });
  }
}
