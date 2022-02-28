import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import { Router } from '@angular/router';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements OnInit {
  constructor(public authService: AuthService, public router: Router) {}
  ngOnInit() {}

  async signIn(email: string, password: string) {
    console.log('in')
    await this.authService.SignIn(email, password)
    this.router.navigate(['dashboard']);
  }
}
