import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { CartService } from '../cart.service';
interface Product {
  id: number;
  name: string;
  price: number;
  // Add other properties as needed
}


@Component({
  selector: 'app-beauty',
  templateUrl: './beauty.component.html',
  styleUrl: './beauty.component.css'
})
export class BeautyComponent {
  products:any;
  //cartService: any;

  constructor(private http: HttpClient,private cartService: CartService) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.http.get<Product[]>('https://localhost:7062/api/Beauty')
      .subscribe(
        (data) => {this.products = data,
        console.log(data)}
      );
  }
  addToCart(product: Product): void {
    this.cartService.addToCart(product);
    alert('Added to cart successfully!');
  }
}
