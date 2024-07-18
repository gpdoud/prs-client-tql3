import { Component } from '@angular/core';
import { Request } from '../request.class';
import { SystemService } from '../../../system.service';
import { RequestService } from '../request.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-request-lines',
  templateUrl: './request-lines.component.html',
  styleUrl: './request-lines.component.css'
})
export class RequestLinesComponent {

  isReadonly = false;
  isHidden = false;
  request: Request = new Request();

  constructor(
    private sys: SystemService,
    private reqsvc: RequestService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    let id = this.route.snapshot.params["id"];
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
