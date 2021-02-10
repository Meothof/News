import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';

import { CommonComponentsModule } from '../common-components/common-components.module';
import { SettingsModule } from '../settings/settings.module';
import { NewsFeedComponent } from './news-feed/news-feed.component';
import { NewsRoutingModule } from './news-routing.module';
import { NewsService } from './news.service';

@NgModule({
  declarations: [NewsFeedComponent],
  imports: [
    CommonModule,
    NewsRoutingModule,
    IonicModule,
    HttpClientModule,
    SettingsModule,
    CommonComponentsModule,
  ],
  providers: [NewsService],
})
export class NewsModule { }
