import { Component, OnInit } from "@angular/core";
import { ProductsService } from './products.service';
import { Product } from "src/models/product";
import { environment } from "src/environments/environment";
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, filter, map, mergeMap } from "rxjs";
import { PageApiResponse } from "src/models/pageApiResponse";

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  providers: [ProductsService],
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  readonly itemsPerPage = environment.defaultPageSize;
  products$?: Observable<Product[]>;
  currentPage!: number;
  totalElements!: number;

  constructor(private productsService: ProductsService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    if (isNaN(+this.activatedRoute?.snapshot?.queryParams["currentPage"])) {
      this.loadPage(1);
    }
    this.products$ = this.activatedRoute.queryParams
      .pipe(
        map(params => params["currentPage"]),
        filter((possibleCurrentPage: any) => !isNaN(possibleCurrentPage)),
        mergeMap((currentPage: number | string) => {
          this.currentPage = +currentPage;
          return this.productsService.getProducts(this.currentPage, this.itemsPerPage);
        }),
        map((result: PageApiResponse<Product>) => {
          this.totalElements = result.totalElements;
          return result.content;
        })
      )
  }

  isEven(n: number): boolean {
    return n % 2 == 0;
  }

  loadPage(page: number): void {
    this.router.navigate([], {
      relativeTo: this.activatedRoute,
      queryParams: { currentPage: page }
    });
  }
}