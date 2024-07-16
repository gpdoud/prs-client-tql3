import { Component } from '@angular/core';
import { User } from '../user.class';
import { UserService } from '../user.service';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {

  users: User[] = [];

  constructor(
    private usrsvc: UserService
  ) {}

  ngOnInit(): void {
    this.usrsvc.list().subscribe({
      next: (res) => {
        console.table(res);
        this.users = res as User[];
      },
      error: (err) => {
        console.error(err);
      }
    })
  }
}
