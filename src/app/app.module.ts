import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule, NoopAnimationsModule } from "@angular/platform-browser/animations";
import { CommonModule } from "@angular/common";
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ToastrModule, ToastrService } from "ngx-toastr";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HomeModule } from './modules/home/home.module';
import { GalleryModule } from './modules/gallery/gallery.module';
import { AboutModule } from './modules/about/about.module';
import { AuthModule } from './auth/auth.module';
import { AdminModule } from './modules/admin/admin.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    CommonModule,
    HttpClientModule,
    AppRoutingModule,
    AuthModule,
    HomeModule,
    GalleryModule,
    AboutModule,
    AdminModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ToastrService],
  bootstrap: [AppComponent]
})
export class AppModule { }
