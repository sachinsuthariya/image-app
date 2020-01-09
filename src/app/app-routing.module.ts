import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from "./auth/auth-guard.service";

const routes: Routes = [
  {
    path: '',
    loadChildren: './auth/auth.module#AuthModule'
  },
  {
    path: '',
    pathMatch: 'full',
    canActivate: [AuthGuardService],
    redirectTo: 'home'
  },
  {
    path: 'home',
    canActivate: [AuthGuardService],
    loadChildren: './modules/home/home.module#HomeModule'
  },
  {
    path: 'gallery',
    canActivate: [AuthGuardService],
    loadChildren: './modules/gallery/gallery.module#GalleryModule'
  },
  {
    path: 'about',
    canActivate: [AuthGuardService],
    loadChildren: './modules/about/about.module#AboutModule'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
