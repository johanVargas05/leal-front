import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BaseComponent } from '@layout/base/base.component';
import { SidebarComponent } from '@layout/sidebar/sidebar.component';
import { FooterComponent } from '@layout/footer/footer.component';

import { NavbarModule } from '@layout/navbar/navbar.module';


import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [
    BaseComponent,
    FooterComponent,
    SidebarComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    NavbarModule
  ]
})
export class LayoutModule { }
