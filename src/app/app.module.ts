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
import { MatPaginatorModule } from '@angular/material/paginator';
import { AddProductDialogComponent } from './add-product-dialog/add-product-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
//import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AboutDialogComponent } from './about-dialog/about-dialog.component';
import {MatIconModule} from '@angular/material/icon';
import {CdkMenuModule} from '@angular/cdk/menu';
import {MatMenuModule} from '@angular/material/menu';

@NgModule({
  declarations: [
    AppComponent,
    ProductsTemplatesComponent,
    DataProductsComponent,
    HeaderComponent,
    BreadcrumbComponent,
    AddProductDialogComponent,
    AboutDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    FormsModule,
    MatButtonModule,
    MatTabsModule,
    MatInputModule,
    MatCardModule,
    MatGridListModule,
    MatDividerModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatDialogModule,
    MatIconModule,
    CdkMenuModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
