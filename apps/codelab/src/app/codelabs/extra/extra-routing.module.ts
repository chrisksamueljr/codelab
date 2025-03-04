import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { environment } from '../../../environments/environment';

import { FullLayoutComponent } from '../../containers/full-layout';

let routes = [
  {
    path: '',
    component: FullLayoutComponent,
    children: [
      {
        path: 'code-playground',
        loadChildren:
          './code-playground/code-playground.module#CodePlaygroundModule',
        name: 'code-playground',
        description:
          'Learn how pipes transform input values to output values for display in a view',
        page: 'extra'
      },
      {
        path: 'feedback-page',
        loadChildren: './feedback-page/feedback-page.module#FeedbackPageModule',
        name: 'Feedback page',
        description: 'Feedback page'
      },
      {
        path: 'rating-summary',
        loadChildren:
          './rating-summary/rating-summary.module#RatingSummaryModule',
        name: 'rating-summary',
        description:
          'Learn how pipes transform input values to output values for display in a view',
        page: 'extra'
      }
    ]
  }
];

if (environment.production) {
  routes = routes.filter(r => r['prod']);
}

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExtraRoutingModule {}
