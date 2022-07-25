import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDividerModule} from '@angular/material/divider';
import { ProductsTemplatesComponent } from './products-templates/products-templates.component';
import { DataProductsComponent } from './data-products/data-products.component';
import {MatTableModule} from '@angular/material/table';
import { HeaderComponent } from './header/header.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import {MatSortModule} from '@angular/material/sort';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    ProductsTemplatesComponent,
    DataProductsComponent,
    HeaderComponent,
    BreadcrumbComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatButtonModule,
    MatTabsModule,
    MatInputModule,
    MatCardModule,
    MatGridListModule,
    MatDividerModule,
    MatTableModule,
    MatSortModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
