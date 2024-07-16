import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product.class';
import { ProductService } from '../product.service';
import { VendorService } from '../../vendor/vendor.service';
import { Vendor } from '../../vendor/vendor.class';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrl: './product-view.component.css'
})
export class ProductViewComponent {

  isReadonly = true;
  isHidden = true;
  product: Product = new Product();
  vendors: Vendor[] = [];
  verifyRemove: boolean = false;

  constructor(
    private prdsvc: ProductService,
    private vndsvc: VendorService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  toggleVerifyRemove(): void {
    this.verifyRemove = !this.verifyRemove;
  }

  remove(): void {
    this.prdsvc.remove(this.product.id).subscribe({
      next: (res) => {
        console.log("Product deleted successfully!");
        this.router.navigateByUrl("/product/list");
      },
      error: (err) => {
        console.error(err);
      }
    })
  }

  change(event: { target: { value: number; }; }): void {
    this.product.price = event.target.value;
  }

  ngOnInit(): void {
    this.vndsvc.list().subscribe({
      next: (res) => {
        console.log(res);
        this.vendors = res as Vendor[];
      },
      error: (err) => {
        console.error(err);
      }
    })
    let id = this.route.snapshot.params["id"];
    console.log("ID is ", id);
    this.prdsvc.get(id).subscribe({
      next: (res) => {
        console.log(res);
        this.product = res as Product;
      },
      error: (err) => {
        console.error(err);
      }
    })
  }
}
