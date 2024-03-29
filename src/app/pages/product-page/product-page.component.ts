import { Component, OnInit } from '@angular/core';
import {ProductsService} from "../../services/products.service";
import {ModalService} from "../../services/modal.service";

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit {
  title = 'angular-training';
  // products$: Observable<IProduct[]>
  loading=false
  term= ''

  constructor(
    public productsService: ProductsService,
    public modalService: ModalService
  ) {
  }
  ngOnInit(): void {
    // this.loading=true
    // this.products$ = this.productsService.getAll().pipe(
    //   tap(() => this.loading=false)
    // )
    this.productsService.getAll().subscribe(products=>{
      this.loading=false
    })
  }
}
