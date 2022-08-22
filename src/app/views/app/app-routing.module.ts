import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BaseComponent } from '@layout/base/base.component';
import { AuthGuard } from '@shared/guards/auth.guard';


const routes: Routes = [
  {
      path: '', component: BaseComponent,
      children: [],
      data:{name:"Home",validRole:false},
      canActivate:[AuthGuard]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
