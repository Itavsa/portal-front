import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Article } from '../../models/article';
import { environment } from '../../environments/environment.development';

@Injectable()
export class ArticlesService {
  url = environment.apiUrl + "/articles"
  
  constructor(private http: HttpClient) {}
  
  getArticles(page: number): Observable<Article> {
    return this.http.get<Article>(this.url, {params: {page, size: environment.defaultPageSize}});
  }
  
}