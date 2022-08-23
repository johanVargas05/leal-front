import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { environment } from '@environment';

import { LoginService } from './services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formLogin: FormGroup;
  processStatus = false;

  constructor(private readonly _FormBuilder:FormBuilder,private readonly _loginService:LoginService) {
    this.formLogin = this._FormBuilder.group({
      password: ['', Validators.required],
      email:['', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      recordarme:[false]
    });

  }

  ngOnInit(): void {
    this.validReadme()
  }

  async login() {
    const data =this.formLogin.value;
    if(data.recordarme) localStorage.setItem(environment.readme, JSON.stringify(data.recordarme));
    delete  data.recordarme;

    const result = await this._loginService.login(data);

    if(!result){
      this.formLogin.controls.email.setErrors({error_credentials:true});
    this.formLogin.controls.password.setErrors({error_credentials:true});
    this.formLogin.markAllAsTouched()
    }


  }

  validReadme() {
    const {email} = JSON.parse(localStorage.getItem(environment.readme) || '');
    let recordarme = false;
    (email)?recordarme=true:recordarme = false;

    this.formLogin.patchValue({email, recordarme });
  }

}
