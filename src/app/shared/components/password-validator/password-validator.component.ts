import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-password-validator',
  templateUrl: './password-validator.component.html',
  styleUrls: ['./password-validator.component.scss']
})
export class PasswordValidatorComponent implements OnInit {
  @Input()resetPassForm:FormGroup;
  @Input()processStatus=false;
  @Input()colOption = true;
  @Input()textButton = 'Cambiar contraseña';
  @Output() Submit = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit(): void {
  }

  get minCharacter() {
    if(this.resetPassForm.controls.password.value){
      return this.resetPassForm.controls.password.hasError('minlength');
    }else{
      return true;
    }
  }

  get number(){
    if(this.resetPassForm.controls.password.value){
      return this.resetPassForm.controls.password.hasError('hasNumber');
    }else{
      return true;
    }

  }

  get capitalCase(){
    if(this.resetPassForm.controls.password.value){
      return this.resetPassForm.controls.password.hasError('hasCapitalCase');
    }else{
      return true;
    }
  }

  get smallCase(){
    if(this.resetPassForm.controls.password.value){
      return this.resetPassForm.controls.password.hasError('hasSmallCase');
    }else{
      return true;
    }
  }

  get specialCharacters(){
    if(this.resetPassForm.controls.password.value){
      return this.resetPassForm.controls.password.hasError('hasSpecialCharacters');
    }else{
      return true;
    }
  }

  submitResetPassForm(){
    this.Submit.emit(true);
  }

}
