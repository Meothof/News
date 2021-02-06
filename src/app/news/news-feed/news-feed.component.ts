import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { IArticle } from 'src/app/interfaces/article';
import { NewsService } from '../news.service';

interface RefreshEvent {
  target: {
    complete: () => void
  };
}

interface LoaderEvent {
  target: {
    complete: () => void,
    disabled: boolean;
  };
}

@Component({
  selector: 'app-news-feed',
  templateUrl: './news-feed.component.html',
  styleUrls: ['./news-feed.component.scss'],
})
export class NewsFeedComponent implements OnInit {

  public readonly headlines$: BehaviorSubject<Array<IArticle>>;
  private pageLoaded: number;

  constructor(private newsService: NewsService) {
    this.headlines$ = new BehaviorSubject([]);
    this.pageLoaded = 0;
  }

  ngOnInit() {
    this.refresh();
  }

  public async refresh(event?: any) {
    this.pageLoaded = 1;
    const headlines = (await this.newsService.fetchHeadlines());
    this.headlines$.next(headlines);
    event?.target.complete();
  }

  public async viewArticle(article: IArticle) {
    window.open(article.url);
  }

  public async loadMore(event: any) {
    const newArticles = (await this.newsService.fetchHeadlines(this.pageLoaded + 1));
    if (newArticles.length > 0) {
      this.pageLoaded++;
      this.headlines$.next(this.headlines$.value.concat(newArticles));
      event.target.complete();
    } else { // No more articles to load
      event.target.disabled = true;
    }
  }

}
