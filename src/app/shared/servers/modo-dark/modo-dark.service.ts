import { Injectable } from '@angular/core';
import { environment } from '@environment';

@Injectable({
  providedIn: 'root'
})
export class ModoDarkService {
  constructor() { }

  changeMode(mode:boolean) {
    if(mode) {
      const newSS = document.createElement('link');
      newSS.rel ='stylesheet';
      newSS.href =  'dark/dark-mode.css';
      newSS.id = 'dark-mode';
      document.getElementsByTagName("head")[0].appendChild(newSS);
      this.theme = 'theme-dark';
    }else{
      document.getElementById('dark-mode')?.remove();
      this.theme = 'theme-light';
    }
  }

  set theme(theme: 'theme-dark' | 'theme-light') {
    localStorage.setItem(environment.theme,theme);
  }

  get theme() {
    const theme = localStorage.getItem(environment.theme) as 'theme-dark' | 'theme-light' | null;
    return (theme)?theme:'theme-light';
  }
}
