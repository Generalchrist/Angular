import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductResponseModel } from 'src/app/models/productResponseModule';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrl = 'https://localhost:44304/api/products/getall';

  constructor(private httpclient: HttpClient) { }

  getProducts():Observable<ProductResponseModel> {
    return this.httpclient.get<ProductResponseModel>(this.apiUrl);
  }

}
