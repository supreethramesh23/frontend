// cart.component.ts
import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: any;

  constructor(private cartService: CartService, private http : HttpClient) {}

  ngOnInit(): void {
    this.getCartItems();
  }

  getCartItems(): void {
      this.http.get('https://localhost:7062/api/cartt')
        .subscribe(
          (data) => {this.cartItems = data,
          console.log(data)}
        );
  }

  removeFromCart(itemId: number): Observable<any> {
    const deleteUrl = `https://localhost:7062/api/cartt/${itemId}`;
    return this.http.delete<any>(deleteUrl);
  }


}

