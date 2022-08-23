import { Component, OnInit } from '@angular/core';
import { ModoDarkService } from '@shared/servers/modo-dark/modo-dark.service';

@Component({
  selector: 'app-switch-mode',
  templateUrl: './switch-mode.component.html',
  styleUrls: ['./switch-mode.component.scss']
})
export class SwitchModeComponent implements OnInit {
  modo=true;
  constructor(private _modoDark:ModoDarkService) { }

  ngOnInit(): void {
    if (this._modoDark.theme==='theme-dark'){
      this.modo=true;
    }else{
      this.modo=false;
    }
    this._modoDark.changeMode(this.modo);
  }

  changeMode(){
    this._modoDark.changeMode(this.modo);
  }

}
