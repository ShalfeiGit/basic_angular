import { Routes } from '@angular/router';
import { Articles2Component } from './articles2/articles2.component';
import { ArticleComponent } from './article/article.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { canActivateTeam, canMatchTeam } from './guards/auth.guard';
import { heroResolver } from './resolvers/customData.resolver';

export const routes: Routes = [
  { path: '', component: ArticleComponent },
  { path: 'article', component: Articles2Component, canActivate: [canActivateTeam], resolve: {hero: heroResolver}, },
  { path: 'article/:id', component: Articles2Component, canMatch: [canMatchTeam]},
  { path: 'error-page', component: ErrorPageComponent, canActivateChild: [canActivateTeam],
    children: [{path: 'test-nested-page', component: Articles2Component}]
  },
  { path: '**', redirectTo: 'error-page'}
];
