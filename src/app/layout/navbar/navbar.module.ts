import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from './navbar.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { NavProfileComponent } from './components/nav-profile/nav-profile.component';


import { SharedModule } from '@shared/shared.module';



@NgModule({
  declarations: [
    NavbarComponent,
    NavProfileComponent,
    SearchBarComponent,
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [NavbarComponent]
})
export class NavbarModule { }
