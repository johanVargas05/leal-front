import { Component, OnInit } from '@angular/core';
import { SharingService } from '@core/services/sharing.service';
import { Observable } from 'rxjs';
import { User } from '@shared/interfaces/user.interfaces';
import { AuthService } from '@views/auth/services/auth.service';

@Component({
  selector: 'app-nav-profile',
  templateUrl: './nav-profile.component.html',
  styleUrls: ['./nav-profile.component.scss']
})
export class NavProfileComponent implements OnInit {
  data$:Observable<User>;
  constructor(sharingService:SharingService, private _authService:AuthService ) {
    this.data$ = sharingService.sharingDataUser;
  }

  ngOnInit(): void {

  }

  async signOut() {
    await this._authService.signOut();
  }
}
