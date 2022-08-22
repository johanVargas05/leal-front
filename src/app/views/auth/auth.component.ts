import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '@environment';
import LST from '@shared/utils/local-storage';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  constructor(private readonly _router: Router) { }

  ngOnInit(): void {
    const token = LST.get<{token:string}>(environment.tokenKey,{token:''});
    if(token) this._router.navigateByUrl('app');
  }

}
