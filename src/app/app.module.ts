import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../environments/environment.prod';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';

import {MatTableModule} from '@angular/material/table';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AdminService } from './shared/services/admin.service';
@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    DashboardComponent,
    SignUpComponent,
    VerifyEmailComponent,
    ForgotPasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    MatTableModule,
    NoopAnimationsModule,
    HttpClientModule
  ],
  providers: [AdminService],
  bootstrap: [AppComponent]
})
export class AppModule { }
