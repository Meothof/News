import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IArticle } from '../interfaces/article';
import { key } from '../keys/gnews';

@Injectable()
export class NewsService {

  constructor(private httpClient: HttpClient) {}

  public async fetchHeadlines(page = 1): Promise<IArticle[]> {
    const headlines = await this.httpClient.get<{articles: IArticle[]}>(
      `https://gnews.io/api/v4/top-headlines?&country=ca&lang=fr&page=${page}&token=${key}`
    ).toPromise();
    return headlines.articles;
  }
}
