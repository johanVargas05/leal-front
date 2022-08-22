import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'app',
    pathMatch: 'full'
  },
  {
    path: 'app',
    loadChildren: () => import('@views/app/app.module').then((m) => m.AppModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('@views/auth/auth.module').then((m) => m.AuthModule)
  },

];



@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewsRoutingModule { }
