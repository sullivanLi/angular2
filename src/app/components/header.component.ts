import { Component } from '@angular/core';
import { TaxonsService } from '../services/taxons.service';

@Component({
  moduleId: module.id,
  selector: 'my-header',
  templateUrl: './header.component.html',
  styleUrls: ['../css/header.css'],
  providers: [TaxonsService]
})
export class HeaderComponent {
  taxons: Taxon[];

  constructor(private taxonsService: TaxonsService){
    this.taxonsService.getTaxons().subscribe(taxons => {
      this.taxons = taxons.taxonomies;
    });
  }
}

interface Taxon {
  id: number;
  name: string;
}
