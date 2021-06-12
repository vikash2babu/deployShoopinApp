import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductTableComponent } from './product-table/product-table.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product/product.component';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SaleDialogeComponent } from './sale-dialoge/sale-dialoge.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule} from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductListComponent,
    ProductTableComponent,
    DashboardComponent,
    SaleDialogeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
