import { Component, OnInit } from '@angular/core';
import { Router, RouteConfigLoadStart, RouteConfigLoadEnd } from '@angular/router';
import { environment } from '@environment';
import { UserDataService } from '@shared/servers/user-data/user-data.service';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss']
})
export class BaseComponent implements OnInit {
  isLoading: boolean;
  validationChangePassword=false;
  constructor( _router: Router,  _userDataService: UserDataService) {

    _router.events.forEach((event) => {
      if (event instanceof RouteConfigLoadStart) {
        this.isLoading = true;
      } else if (event instanceof RouteConfigLoadEnd) {
        this.isLoading = false;
      }
    });
    _userDataService.getData();
  }

  ngOnInit(): void {
  }

}
