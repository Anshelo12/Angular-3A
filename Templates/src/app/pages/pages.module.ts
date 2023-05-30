import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';
import { PagesComponent } from './pages.component';
import { NoPagesFoundComponent } from './no-pages-found/no-pages-found.component';

@NgModule({
  declarations: [
    DashboardComponent,
    CategoryComponent,
    ProductComponent,
    PagesComponent,
    NoPagesFoundComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DashboardComponent,
    CategoryComponent,
    ProductComponent,
    PagesComponent
  ],
})
export class PagesModule { }
