import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  constructor(private httpClient:HttpClient){
    
  }
  ngOnInit(): void{
    this.getProducts();
  }
  getProducts(){
    const response = this.httpClient.get('http://api.escuela.js.co/api/vi/products').subscribe(
    response=>{
    console.log(response);
    }
    );
  };
}
