
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import {CartService} from '../cart.service';

interface Product {
  id: number;
  name: string;
  price: number;
  // Add other properties as needed
}

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products:any;
  route: any;
  //cartService: any;

  constructor(private http: HttpClient, private cartService: CartService) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.http.get<Product[]>('https://localhost:7062/api/Products')
      .subscribe(
        (data) => {this.products = data,
        console.log(data)}
      );
  }
  // addToCart(product: Product): void {
  //   this.http.post('https://localhost:7062/api/cartt' , {product})
  //   .subscribe(
  //   );
  // }

  addToCart(product: Product): void {
    this.http.post('https://localhost:7062/api/cartt', product)
      .subscribe(
        (response) => {
          console.log('Added to cart:', response);
          
        },
        (error) => {
          console.error('Error adding to cart:', error);
          
        }
      );
  }
  
}

