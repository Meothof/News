import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IArticle } from '../interfaces/article';
import { key } from '../keys/gnews';
import { SettingsService } from '../settings/settings.service';

@Injectable()
export class NewsService {

  constructor(
    private httpClient: HttpClient,
    private settingsService: SettingsService,
  ) { }

  public async fetchHeadlines(page = 1): Promise<IArticle[]> {
    const headlines = await this.httpClient.get<{ articles: IArticle[] }>(
      `https://gnews.io/api/v4/top-headlines?
      country=${this.settingsService.getCountry()}&
      lang=${this.settingsService.getLanguage()}&
      page=${page}&
      token=${key}`
    ).toPromise();
    return headlines.articles;
  }
}
