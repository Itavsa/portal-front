import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Product } from '../../models/product';
import { environment } from '../../environments/environment.development';

@Injectable()
export class ProductsService {
  url = environment.apiUrl + "/products"
  
  constructor(private http: HttpClient) {}
  
  getProducts(page: number): Observable<Product[]> {
    return this.http.get<Product[]>(this.url, {params: {page, size: environment.defaultPageSize}});
  }
  
}