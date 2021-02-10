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

  public readonly headlines$: Subject<Array<IArticle>>;

  constructor(private newsService: NewsService) {
    this.headlines$ = new Subject();
  }

  ngOnInit() {
    this.refresh();
  }

  public async refresh(event?: any) {
    const headlines = (await this.newsService.fetchHeadlines());
    this.headlines$.next(headlines);
    event?.target.complete();
  }

  public async viewArticle(article: IArticle) {
    window.open(article.link);
  }

  public trackArticleById(_: number, article: IArticle): string {
    return article.id;
  }
}
