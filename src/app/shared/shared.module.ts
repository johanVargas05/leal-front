import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { NgxMaskModule } from 'ngx-mask';

import { FeahterIconModule } from '@core/feather-icon/feather-icon.module';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';


import { ContentAnimateDirective } from '@core/content-animate/content-animate.directive';
import { ErrorInputComponent } from './components/error-input/error-input.component';
import { PasswordValidatorComponent } from './components/password-validator/password-validator.component';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

@NgModule({
  declarations: [
    ContentAnimateDirective,
    ErrorInputComponent,
    PasswordValidatorComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    NgbModule,
    NgxMaskModule.forRoot(),
    NgxDropzoneModule,
    NgSelectModule,
    PerfectScrollbarModule,
    FeahterIconModule,
    SweetAlert2Module.forRoot()
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    NgbModule,
    NgxMaskModule,
    NgxDropzoneModule,
    NgSelectModule,
    PerfectScrollbarModule,
    FeahterIconModule,
    SweetAlert2Module,
    ContentAnimateDirective,
    ErrorInputComponent,
    PasswordValidatorComponent
  ],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    }
  ]
})
export class SharedModule { }
