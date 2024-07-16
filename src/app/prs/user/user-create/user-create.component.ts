import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { User } from '../user.class';
import { SystemService } from '../../../system.service';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrl: './user-create.component.css'
})
export class UserCreateComponent {

  isReadonly = false;
  isHidden = false;
  user: User = new User();

  constructor(
    private sys: SystemService,
    private usrsvc: UserService,
    private router: Router
  ) {}

  save(): void {
    this.usrsvc.create(this.user).subscribe({
      next: (res) => {
        console.log("User created successfully!");
        this.router.navigateByUrl("/user/list");
      },
      error: (err) => {
        console.error(err);
      }
    })
  }

  ngOnInit(): void {
    if(this.sys.loggedInUser == null) {
      this.router.navigateByUrl("/user/login");
    }
  }
}
