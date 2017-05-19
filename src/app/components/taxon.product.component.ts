import 'rxjs/add/operator/switchMap';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { TaxonProductsService } from '../services/taxon.products.service';

@Component({
  moduleId: module.id,
  selector: 'taxonProduct',
  templateUrl: 'taxon.product.component.html',
  providers: [TaxonProductsService]
})
export class TaxonProductComponent  {
  constructor(
    private taxonProductsService: TaxonProductsService,
    private route: ActivatedRoute
  ) {}
  
  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.taxonProductsService.getProducts(params['id']))
      .subscribe(products => {
        console.log(products);
      });
  }
}