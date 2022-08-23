import { Component, OnInit } from '@angular/core';
import { environment } from '@environment';

@Component({
  selector: 'app-nav-profile',
  templateUrl: './nav-profile.component.html',
  styleUrls: ['./nav-profile.component.scss']
})
export class NavProfileComponent implements OnInit {
  infoUser={
    name:'',
    email: '',
    imgProfile:'assets/images/profiles/perfil.png'
  }
  constructor() { }

  ngOnInit(): void {

  }
}
