import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { NewsFeedComponent } from './news-feed/news-feed.component';

const routes: Routes = [
  {
    path: '',
    component: NewsFeedComponent,
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class NewsRoutingModule {}