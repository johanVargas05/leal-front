import { Injectable } from '@angular/core';
import Swal, { SweetAlertIcon, SweetAlertOptions } from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class MessageToastService {

 private configMessage:SweetAlertOptions={
    toast:true,
    position: 'top-end',
    showConfirmButton: false,
    timerProgressBar: true
    }


  constructor() { }

  alertMessage(title: string, message: string, icon:SweetAlertIcon,timer:number=5000){
    this.configMessage.title = title;
    this.configMessage.text = message;
    this.configMessage.icon =icon;
    this.configMessage.timer =timer;

    Swal.fire(this.configMessage);
  }
}
