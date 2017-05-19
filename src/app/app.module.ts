import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent }  from './app.component';
import { TaxonComponent }  from './components/taxon.component';
import { TaxonProductComponent }  from './components/taxon.product.component';

const appRoutes: Routes = [
  { path: '', component: TaxonComponent, pathMatch: 'full' },
  { path: 'taxons/:id', component: TaxonProductComponent }
];

@NgModule({
  imports:      [ RouterModule.forRoot(appRoutes), BrowserModule, HttpModule ],
  declarations: [ AppComponent, TaxonComponent, TaxonProductComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
