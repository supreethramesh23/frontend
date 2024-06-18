import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  constructor(private http : HttpClient, private route : Router){}

  ngOnInit(): void{}

  mobile(){
    this.route.navigate(['/productList']);
  }

  fashion(){
    this.route.navigate(['/fashion']);
  }

  beauty(){
    this.route.navigate(['/beauty']);
  }

  grocery(){
    this.route.navigate(['/grocery']);
  }

  login() {

    this.route.navigate(['/login']);
  }
}
