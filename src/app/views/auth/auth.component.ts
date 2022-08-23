import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '@environment';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  constructor(private readonly _router: Router) { }

  ngOnInit(): void {
    const token = localStorage.getItem(environment.tokenKey);
    console.log(token);
    if(token) this._router.navigateByUrl('app');
  }

}
