import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomValidation } from '@shared/constants/customValidation';
import { RegisterData } from './interfaces/register.interfaces';
import { RegisterService } from './services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  formRegister: FormGroup;
  processStatus = false;

  constructor(private readonly _FormBuilder:FormBuilder, private readonly _registerService:RegisterService) {
    this.formRegister = this._FormBuilder.group({
      fullName: ['', Validators.required],
      email:['', [Validators.required, Validators.email, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      password:['',Validators.compose([
        Validators.required,
        CustomValidation.patternValidator(/\d/, { hasNumber: true }),
        CustomValidation.patternValidator(/[A-Z]/, { hasCapitalCase: true }),
        CustomValidation.patternValidator(/[a-z]/, { hasSmallCase: true }),
        CustomValidation.patternValidator(/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/, { hasSpecialCharacters: true }),
        Validators.minLength(8)
      ])],
      passwordConfirmation: ['',[Validators.required]]
    },{validator:CustomValidation.passwordMatchValidator});
  }

  ngOnInit(): void {
  }

  async registerUser() {
    this.processStatus=true;
    const data = this.formRegister.value;
    delete data.passwordConfirmation;
    await this._registerService.register(data);
    this.processStatus=false;
  }
}
