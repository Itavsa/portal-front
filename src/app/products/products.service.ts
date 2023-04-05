import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Product } from '../../models/product';
import { environment } from '../../environments/environment.development';
import { PageApiResponse } from '../../models/pageApiResponse';

@Injectable()
export class ProductsService {
  url = environment.apiUrl + "/products"
  
  constructor(private http: HttpClient) {}
  
  getProducts(page: number, itemsPerPage: number): Observable<PageApiResponse<Product>> {
    return this.http.get<PageApiResponse<Product>>(this.url, {params: {page, size:   itemsPerPage}});
  }
  
}