import { Component } from '@angular/core';
import { Request } from '../request.class';
import { RequestService } from '../request.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-request-view',
  templateUrl: './request-view.component.html',
  styleUrl: './request-view.component.css'
})
export class RequestViewComponent {

  isReadonly = true;
  isHidden = true;
  request: Request = new Request();
  verifyRemove: boolean = false;

  constructor(
    private reqsvc: RequestService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  toggleVerifyRemove(): void {
    this.verifyRemove = !this.verifyRemove;
  }

  remove(): void {
    this.reqsvc.remove(this.request.id).subscribe({
      next: (res) => {
        console.log("Request deleted successfully!");
        this.router.navigateByUrl("/request/list");
      },
      error: (err) => {
        console.error(err);
      }
    })
  }

  ngOnInit(): void {
    let id = this.route.snapshot.params["id"];
    console.log("ID is ", id);
    this.reqsvc.get(id).subscribe({
      next: (res) => {
        console.log(res);
        this.request = res as Request;
      },
      error: (err) => {
        console.error(err);
      }
    })
  }
}
