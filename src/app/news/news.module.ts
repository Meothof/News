import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsFeedComponent } from './news-feed/news-feed.component';
import { NewsRoutingModule } from './news-routing.module';
import { IonicModule } from '@ionic/angular';
import { HttpClientModule } from '@angular/common/http';
import { NewsService } from './news.service';
import { SettingsModule } from '../settings/settings.module';

@NgModule({
  declarations: [NewsFeedComponent],
  imports: [
    CommonModule,
    NewsRoutingModule,
    IonicModule,
    HttpClientModule,
    SettingsModule,
  ],
  providers: [NewsService],
})
export class NewsModule { }
