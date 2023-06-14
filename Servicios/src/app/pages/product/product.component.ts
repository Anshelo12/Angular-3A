import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  //inyeccion de dependencias = alogo similar a instanciar un objeto
  constructor(private httpClient:HttpClient){
    
  }
  ngOnInit(): void{
    //this.getProducts();
    //this.getProduct();
    this.createProduct();
    // this.updateProsuct();
  }

  getProducts(){
     //objeto . metodo = this.httpClient.get
     const response = this.httpClient.get('http://api.escuelajs.co/api/v1/products').subscribe(
      response=>{
      console.log(response);
      }
      ); // haciendo una peticion al backend 
      console.log(response);
  };

  getProduct(){
    //objeto . metodo = this.httpClient.get
    const url = 'http://api.escuelajs.co/api/v1/products/2';
    const response = this.httpClient.get(url).subscribe(
    response=>{
    console.log(response);
    }
    );
  };

  createProduct(){
    const data = {
      title: "Zapatos",
      price: 40,
      description: "Zapatos deportivos / Anshelo Proaño",
      categoryId: 1,
      images: ["https://picsum.photos/640/640?r=4213","https://picsum.photos/640/640?r=7623","https://picsum.photos/640/640?r=9048"]
    }
    const url = 'https://api.escuelajs.co/api/v1/products';
    this.httpClient.post(url, data).subscribe(
      response=>{
        console.log(response);
    }
    );
  } 

  // updateProduct(){
  //   const data= {
  //     title: "Zapatos",
  //     price: 40,
  //     description: "Zapatos deportivos / Anshelo Proaño",
  //   }
  //   const url = 'https://api.escuelajs.co/api/v1/products';
  //   const response = this.httpClient.post(url, data).subscribe(
  //   response=>{
  //   console.log(response);
  //   }
  //   );
  // } 

  // deleteProduct(){
  //   const url = 'https://api.escuelajs.co/api/v1/products';
  //   this.httpClient.delete(url).subscribe(
  //     response=>{
  //       console.log(response);
  //   }
  //   );
  // }
}
