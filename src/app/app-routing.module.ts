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

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },

  { path: "user/list", component: UserListComponent },
  { path: "user/view/:id", component: UserViewComponent },
  { path: "user/create", component: UserCreateComponent },
  { path: "user/change/:id", component: UserChangeComponent },
  { path: "user/login", component: UserLoginComponent },
  
  { path: "home", component: HomeComponent },
  { path: "about", component: AboutComponent },

  { path: "**", component: E404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
