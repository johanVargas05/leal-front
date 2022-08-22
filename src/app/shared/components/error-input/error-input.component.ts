import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-error-input',
  templateUrl: './error-input.component.html',
  styleUrls: ['./error-input.component.scss']
})
export class ErrorInputComponent implements OnInit {
  @Input() FormGroupControl: AbstractControl;
  @Input() options: {control:string | (string | number)[], errors:{type:string, message:string }[]};
  constructor() { }

  ngOnInit(): void {
  }

}
