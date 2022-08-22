import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-profile',
  templateUrl: './nav-profile.component.html',
  styleUrls: ['./nav-profile.component.scss']
})
export class NavProfileComponent implements OnInit {
  infoUser={
    name:'',
    email: '',
    imgProfile:'https://via.placeholder.com/80x80'
  }
  constructor() { }

  ngOnInit(): void {

  }
}
