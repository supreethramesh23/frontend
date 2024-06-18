import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductListComponent } from './product-list/product-list.component';
import {HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { MobileDataComponent } from './mobile-data/mobile-data.component';
import { FashionComponent } from './fashion/fashion.component';
import { BeautyComponent } from './beauty/beauty.component';
import { GroceryComponent } from './grocery/grocery.component';
import { LogInComponent } from './log-in/log-in.component';
import { CartComponent } from './cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProductListComponent,
    MobileDataComponent,
    FashionComponent,
    BeautyComponent,
    GroceryComponent,
    LogInComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(withFetch())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
