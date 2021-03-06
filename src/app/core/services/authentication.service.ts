import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';

@Injectable()

export class AuthenticationService {
    private user: Observable<firebase.User>;

    constructor(private firebaseAuth: AngularFireAuth) { 
        this.user = firebaseAuth.authState;
    }

    signInWithFacebook() {
        return this.firebaseAuth.auth.signInWithPopup(
          new firebase.auth.FacebookAuthProvider()
        )
      }
}
