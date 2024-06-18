import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { FashionComponent } from './fashion/fashion.component';
import { BeautyComponent } from './beauty/beauty.component';
import { GroceryComponent } from './grocery/grocery.component';
import { LogInComponent } from './log-in/log-in.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  {
    path:"",component:NavbarComponent
  },
  {path : 'productList', component : ProductListComponent},
  { path : 'fashion', component : FashionComponent},
  { path : 'beauty', component : BeautyComponent},
  { path : 'grocery', component : GroceryComponent},
  { path: 'cart', component: CartComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
