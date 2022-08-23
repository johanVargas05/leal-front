import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../interfaces/user.interfaces';
import { environment } from '@environment';
import { lastValueFrom } from 'rxjs';
import { SharingService } from '@core/services/sharing.service';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor(private _http: HttpClient,  private sharingService:SharingService) { }

  async getData() {
    const {id} = JSON.parse(localStorage.getItem(environment.userData) ||'');
    const $observable = this._http.get<User>(`${environment.urlServer}users/${id}`);
     const user = await lastValueFrom($observable);
      this.sharingService.sharingDataUserData = user;
      const data= JSON.stringify({id:user._id,roles:user.roles});
      localStorage.setItem(environment.userData,data);
}

}
