import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  removeFromCart(itemId: number) {
    throw new Error('Method not implemented.');
  }
  private cartItems: any[] = []; 

  constructor() {}

  addToCart(product: any): void {
    this.cartItems.push(product);
    console.log('Cart Items:', this.cartItems);
  }

  getCartItems(): any[] {
    return this.cartItems;
  }

  clearCart(): void {
    this.cartItems = [];
  }
}
