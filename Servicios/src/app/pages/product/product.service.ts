import { Injectable } from '@angular/core';
import { CreateProductModel, UpdateProductModel } from 'src/app/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  httpClient: any;
  API_URL: any;

  constructor() { }

  getAll(){
    const url = `${this.API_URL}`;
    return this.httpClient.get(url);
  }
  getOne(id:number){
    const url = `${this.API_URL}/${id}`;
    return this.httpClient.get(url);
  }
  store(product:CreateProductModel){
    const url = `${this.API_URL}`;
    return this.httpClient.post(url,product);
  }
  update(id:number, product:UpdateProductModel){
    const url = `${this.API_URL}/${id}`;
    return this.httpClient.put(url,product);
  }
  /*Anshelo Proaño*/
}

