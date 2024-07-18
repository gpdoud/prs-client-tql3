import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './prs/user/user-list/user-list.component';
import { MenuComponent } from './prs/menu/menu/menu.component';
import { HomeComponent } from './prs/misc/home/home.component';
import { AboutComponent } from './prs/misc/about/about.component';
import { UserViewComponent } from './prs/user/user-view/user-view.component';
import { E404Component } from './prs/misc/e404/e404.component';
import { UserCreateComponent } from './prs/user/user-create/user-create.component';
import { UserChangeComponent } from './prs/user/user-change/user-change.component';
import { UserLoginComponent } from './prs/user/user-login/user-login.component';
import { VendorListComponent } from './prs/vendor/vendor-list/vendor-list.component';
import { VendorViewComponent } from './prs/vendor/vendor-view/vendor-view.component';
import { VendorCreateComponent } from './prs/vendor/vendor-create/vendor-create.component';
import { VendorChangeComponent } from './prs/vendor/vendor-change/vendor-change.component';
import { ProductListComponent } from './prs/product/product-list/product-list.component';
import { ProductViewComponent } from './prs/product/product-view/product-view.component';
import { ProductCreateComponent } from './prs/product/product-create/product-create.component';
import { ProductChangeComponent } from './prs/product/product-change/product-change.component';
import { RequestListComponent } from './prs/request/request-list/request-list.component';
import { RequestViewComponent } from './prs/request/request-view/request-view.component';
import { RequestCreateComponent } from './prs/request/request-create/request-create.component';
import { RequestChangeComponent } from './prs/request/request-change/request-change.component';
import { RequestReviewsComponent } from './prs/request/request-reviews/request-reviews.component';
import { RequestLinesComponent } from './prs/request/request-lines/request-lines.component';
import { RequestlineCreateComponent } from './prs/requestline/requestline-create/requestline-create.component';
import { RequestlineChangeComponent } from './prs/requestline/requestline-change/requestline-change.component';
import { RequestReviewItemComponent } from './prs/request/request-review-item/request-review-item.component';

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    MenuComponent,
    HomeComponent,
    AboutComponent,
    UserViewComponent,
    E404Component,
    UserCreateComponent,
    UserChangeComponent,
    UserLoginComponent,
    VendorListComponent,
    VendorViewComponent,
    VendorCreateComponent,
    VendorChangeComponent,
    ProductListComponent,
    ProductViewComponent,
    ProductCreateComponent,
    ProductChangeComponent,
    RequestListComponent,
    RequestViewComponent,
    RequestCreateComponent,
    RequestChangeComponent,
    RequestReviewsComponent,
    RequestLinesComponent,
    RequestlineCreateComponent,
    RequestlineChangeComponent,
    RequestReviewItemComponent
  ],
  imports: [
    BrowserModule,FormsModule,
    AppRoutingModule
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }
