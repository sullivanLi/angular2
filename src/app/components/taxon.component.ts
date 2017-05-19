import { Component } from '@angular/core';
import { TaxonsService } from '../services/taxons.service';

@Component({
  moduleId: module.id,
  selector: 'taxon',
  templateUrl: 'taxon.component.html',
  providers: [TaxonsService]
})
export class TaxonComponent  { 
  taxons: Taxon[];
  
  constructor(private taxonsService: TaxonsService){
    this.taxonsService.getTaxons().subscribe(taxons => {
      console.log(taxons);
      this.taxons = taxons.taxonomies;
    });
  }
}

interface Taxon {
  id: number;
  name: string;
}