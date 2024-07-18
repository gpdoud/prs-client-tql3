import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './prs/user/user-list/user-list.component';
import { HomeComponent } from './prs/misc/home/home.component';
import { AboutComponent } from './prs/misc/about/about.component';
import { UserViewComponent } from './prs/user/user-view/user-view.component';
import { E404Component } from './prs/misc/e404/e404.component';
import { UserCreateComponent } from './prs/user/user-create/user-create.component';
import { UserChangeComponent } from './prs/user/user-change/user-change.component';
import { UserLoginComponent } from './prs/user/user-login/user-login.component';
import { VendorChangeComponent } from './prs/vendor/vendor-change/vendor-change.component';
import { VendorCreateComponent } from './prs/vendor/vendor-create/vendor-create.component';
import { VendorListComponent } from './prs/vendor/vendor-list/vendor-list.component';
import { VendorViewComponent } from './prs/vendor/vendor-view/vendor-view.component';
import { ProductChangeComponent } from './prs/product/product-change/product-change.component';
import { ProductCreateComponent } from './prs/product/product-create/product-create.component';
import { ProductListComponent } from './prs/product/product-list/product-list.component';
import { ProductViewComponent } from './prs/product/product-view/product-view.component';
import { RequestChangeComponent } from './prs/request/request-change/request-change.component';
import { RequestCreateComponent } from './prs/request/request-create/request-create.component';
import { RequestListComponent } from './prs/request/request-list/request-list.component';
import { RequestViewComponent } from './prs/request/request-view/request-view.component';
import { RequestReviewsComponent } from './prs/request/request-reviews/request-reviews.component';
import { RequestLinesComponent } from './prs/request/request-lines/request-lines.component';

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },

  { path: "product/list", component: ProductListComponent },
  { path: "product/create", component: ProductCreateComponent },
  { path: "product/view/:id", component: ProductViewComponent },
  { path: "product/change/:id", component: ProductChangeComponent },
  
  { path: "request/list", component: RequestListComponent },
  { path: "request/create", component: RequestCreateComponent },
  { path: "request/view/:id", component: RequestViewComponent },
  { path: "request/change/:id", component: RequestChangeComponent },
  { path: "request/reviews", component: RequestReviewsComponent },
  { path: "request/lines/:id", component: RequestLinesComponent },
  
  { path: "user/list", component: UserListComponent },
  { path: "user/create", component: UserCreateComponent },
  { path: "user/view/:id", component: UserViewComponent },
  { path: "user/change/:id", component: UserChangeComponent },
  { path: "user/login", component: UserLoginComponent },
  
  { path: "vendor/list", component: VendorListComponent },
  { path: "vendor/create", component: VendorCreateComponent },
  { path: "vendor/view/:id", component: VendorViewComponent },
  { path: "vendor/change/:id", component: VendorChangeComponent },

  { path: "home", component: HomeComponent },
  { path: "about", component: AboutComponent },

  { path: "**", component: E404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
