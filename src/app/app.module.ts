import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing,appRoutingsProvider } from './app.routing';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';
import { UploadService } from './services/upload.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    UploadService
   
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    appRoutingsProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
