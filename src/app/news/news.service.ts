import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IArticle } from '../interfaces/article';
import { SettingsService } from '../settings/settings.service';

const API_ENDPOINT = 'http://localhost:8080';

@Injectable()
export class NewsService {

  constructor(
    private httpClient: HttpClient,
    private settingsService: SettingsService,
  ) { }

  public async fetchHeadlines(): Promise<IArticle[]> {
    const headlines = await this.httpClient.get<IArticle[]>(
      `${API_ENDPOINT}/headlines?country=${this.settingsService.getCountry()}&lang=${this.settingsService.getLanguage()}`,
    ).toPromise();

    return headlines;
  }
}
