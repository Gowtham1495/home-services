import { ReviewsComponent } from './components/reviews/reviews.component';
import { ReviewComponent } from './modules/review/review.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./modules/home-service/home-service.module').then(m => m.HomeServiceModule)
  },
  {
    path: 'serviceProviders',
    loadChildren: () => import('./modules/service-provider/service-provider.module').then(m => m.ServiceProviderModule)
  },
  {
    path: 'review',
    //loadChildren: () => import('./modules/review/review-routing.module').then(m => m.ReviewRoutingModule)
    component: ReviewsComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/home',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
