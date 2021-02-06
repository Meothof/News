import { Injectable } from '@angular/core';
import NewsAPI from 'ts-newsapi';
import { INewsApiResponse } from 'ts-newsapi/lib/types';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private readonly newsApi: NewsAPI;

  constructor() {
     this.newsApi = new NewsAPI('14c9987f9fa94cb9851c2382c5a29f2e');
  }

  public async fetchHeadlines(): Promise<INewsApiResponse> {
    return this.newsApi.getTopHeadlines({
      country: 'ca',
    });
  }
}
