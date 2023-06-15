import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { CreateProductModel, ProductModel, UpdateProductModel} from 'src/app/models/product.model';
import { ProductService } from './product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  products:ProductModel[] = [];

  selectedProduct: UpdateProductModel = {title:'', price:0, description:''};

  constructor(private productService:ProductService){
    this.editProduct()
  }
  editProduct() {
    throw new Error('Method not implemented.');
  }
  ngOnInit(): void{
    this.getProducts();
    //this.getProduct();
    //this.createProduct();
    // this.updateProsuct();
    //this.deleteProduct();
  }

  getProducts(){
      this.productService.getAll().subscribe((response: any)=>{
      console.log(response);
      }
    );
  }

  getProduct(id:number){
    this.productService.getOne(id).subscribe(
      (    response: any)=>{
    console.log(response);
    }
    );
  };

  createProduct(product:CreateProductModel){
    this.productService.store(product).subscribe(
      (      response: any)=>{
        console.log(response);
    }
    );
  } 

  updateProduct(id:number, product:UpdateProductModel){
     const url = 'https://api.escuelajs.co/api/v1/products';
     this.productService.update(id, product).subscribe(
       (     response: any)=>{
     console.log(response);
     }
     );
   } 

  // deleteProduct(){
  //   const url = 'https://api.escuelajs.co/api/v1/products';
  //   this.httpClient.delete(url).subscribe(
  //     response=>{
  //       console.log(response);
  //   }
  //   );
  // }
}
