import { Component, OnInit } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  pageTitle: string = "Acme product management";
  imageWidth: number=50;
  imageMargin: number=2;
  showImage: boolean=true;

  private _listFilter: string = '';

  get listFilter(): string{
    return this._listFilter
  }
  set listFilter(value: string){
    this._listFilter=value;
    console.log('In setter:',value);
    this.filteredProducts = this.performFilter(value);
  }

  filteredProducts: Product[] = [];

  products: Product[]=[]

  displayImage(): void{
    this.showImage = !this.showImage;
  }

  performFilter(filterBy: string): Product[] {
    filterBy = filterBy.toLocaleLowerCase()
    return this.products.filter((product: Product)=>
  product.productName.toLocaleLowerCase().includes(filterBy));
  }

  constructor(private productService: ProductService){

  }

  ngOnInit(): void {
    this.products=this.productService.getProducts();
    this.filteredProducts=this.products;
  }

}
