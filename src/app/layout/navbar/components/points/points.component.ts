import { Component, OnInit } from '@angular/core';
import { SharingService } from '@core/services/sharing.service';
import { User } from '@shared/interfaces/user.interfaces';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-points',
  templateUrl: './points.component.html',
  styleUrls: ['./points.component.scss']
})
export class PointsComponent implements OnInit {
  data$:Observable<{points:number}>;
  constructor(sharingService:SharingService ) {
    this.data$ = sharingService.sharingPointsUser;
  }


  ngOnInit(): void {
  }

}
