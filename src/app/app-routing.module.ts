import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from "./auth/auth-guard.service";

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    loadChildren: './modules/home/home.module#HomeModule'
  },
  {
    path: 'login',
    loadChildren: './auth/auth.module#AuthModule'
  },
  {
    path: 'gallery',
    loadChildren: './modules/gallery/gallery.module#GalleryModule'
  },
  {
    path: 'about',
    loadChildren: './modules/about/about.module#AboutModule'
  },

  {
    path: '',
    redirectTo: 'admin',
    pathMatch: 'full',
    canActivate: [AuthGuardService]
  },
  {
    path: 'admin',
    loadChildren: './modules/admin/admin.module#AdminModule',
    canActivate: [AuthGuardService]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
