import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { TaxonProductsService } from '../services/taxon.products.service';

@Component({
  moduleId: module.id,
  selector: 'taxonProduct',
  templateUrl: 'taxon.product.component.html',
  styleUrls: ['../css/products.css'],
  providers: [TaxonProductsService]
})
export class TaxonProductComponent  {
  products: Product[];
  
  constructor(
    private taxonProductsService: TaxonProductsService,
    private route: ActivatedRoute
  ) {}
  
  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.taxonProductsService.getProducts(params['id']))
      .subscribe(products => {
        console.log(products.products);
        this.products = products.products;
      });
  }
}
interface Product {}