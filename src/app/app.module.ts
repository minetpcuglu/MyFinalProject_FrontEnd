// import { CommonModule } from '@angular/common';

import { NgModule ,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from "@angular/forms";
// import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.component';
import { CategoryComponent } from './components/category/category.component';
import { NaviComponent } from './components/navi/navi.component';
import { VatAddedPipe } from './pipe/vat-added.pipe';
import { FilterPipePipe } from './pipe/filter-pipe.pipe';
import { RouterModule } from '@angular/router';
import { CartSummaryComponent } from './components/cart-summary/cart-summary.component';


// import { ToastrModule } from "ngx-toastr";

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    CategoryComponent,
    CartSummaryComponent,
    NaviComponent,
    VatAddedPipe,
    FilterPipePipe,
    
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass:"toast-bottom-left"
    }
    )
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
