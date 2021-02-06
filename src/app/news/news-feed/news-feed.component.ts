import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { INewsApiArticle } from 'ts-newsapi/lib/types';
import { NewsService } from '../news.service';

interface RefreshEvent {
  target: {
    complete: () => void
  };
}

@Component({
  selector: 'app-news-feed',
  templateUrl: './news-feed.component.html',
  styleUrls: ['./news-feed.component.scss'],
})
export class NewsFeedComponent implements OnInit {

  public readonly headlines$: Subject<Array<INewsApiArticle>>;

  constructor(private newsService: NewsService) {
    this.headlines$ = new Subject();
  }

  ngOnInit() {
    this.refresh();
  }

  public async refresh(event?: RefreshEvent) {
    const headlines = (await this.newsService.fetchHeadlines()).articles;
    this.headlines$.next(headlines);
    event?.target.complete();
  }

}
