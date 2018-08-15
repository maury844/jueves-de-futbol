import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../core/services/authentication.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthenticationService, private router: Router) { }

  ngOnInit() {
  }

  loginWithFacebook(): void {
    this.authService.signInWithFacebook()
      .then((res) => { 
          console.log('res', res);
          this.router.navigate(['dashboard'])
        })
      .catch((err) => console.log(err));
    }
}
