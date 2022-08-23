import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BaseComponent } from '@layout/base/base.component';
import { AuthGuard } from '@shared/guards/auth.guard';


const routes: Routes = [
  {
      path: '', component: BaseComponent,
      children: [
        { path: '', pathMatch: 'full', redirectTo: 'inicio' },
        { path: 'inicio',
          loadChildren: () => import('@views/app/home/home.module').then((m) => m.HomeModule),
          data:{name:"Inicio",validRole:false},
          canActivate: [AuthGuard]
        },
        { path: 'billetera',
          loadChildren: () => import('@views/app/wallet/wallet.module').then((m) => m.WalletModule),
          data:{name:"Billetera",validRole:false},
          canActivate: [AuthGuard]
        },

      ],
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
