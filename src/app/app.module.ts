import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent }  from './app.component';
import { TaxonProductComponent }  from './components/taxon.product.component';
import { HeaderComponent }  from './components/header.component';
import { FooterComponent }  from './components/footer.component';
import { HomeComponent }  from './components/home.component';
import { ProductComponent }  from './components/product.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'taxons/:id', component: TaxonProductComponent },
  { path: 'products/:id', component: ProductComponent }
];

@NgModule({
  imports:      [ RouterModule.forRoot(appRoutes), BrowserModule, HttpModule ],
  declarations: [ AppComponent, TaxonProductComponent, HeaderComponent, FooterComponent, HomeComponent, ProductComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
