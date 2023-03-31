import { Component, OnInit } from "@angular/core";
import { ArticlesService } from './articles.service';

@Component({
  selector: 'articles',
  templateUrl: './articles.component.html',
  providers: [ArticlesService],
})
export class ArticlesComponent {
  articles!: string;

  constructor(private articlesService: ArticlesService) {
    articlesService.getArticles(0).subscribe(articles => this.articles = articles.message);
  }
}