import { Injectable } from "@angular/core";
import { Product } from "./product.model";
import { Observable } from "rxjs";
import  { from } from "rxjs";

@Injectable()
export class StaticDataSource {
private products: Product[] = [
  new Product(1, "Product 1", "Category 1", "Product 1 (Category 1)", 100),
]

getProducts(): Observable<Product[]> {
  Observable = from([this.products])
return Observable;
}
}
