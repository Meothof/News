import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsFeedComponent } from './news-feed/news-feed.component';
import { NewsRoutingModule } from './news-routing.module';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [NewsFeedComponent],
  imports: [
    CommonModule,
    NewsRoutingModule,
    IonicModule,
  ]
})
export class NewsModule { }
