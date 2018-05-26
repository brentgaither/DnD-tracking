import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AUTH_CONFIG } from './auth-config';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

  token: any;

  // Create a stream of logged in status to communicate throughout app
  loggedIn: boolean;
  loggedIn$ = new BehaviorSubject<boolean>(this.loggedIn);

  constructor(private router: Router) {
    // If authenticated, set local profile property and update login status subject
    // If token is expired, log out to clear any data from localStorage
    if (this.isAuthenticated()) {
      this.token = JSON.parse(localStorage.getItem('access_token'));
      this.setLoggedIn(true);
    } else {
      this.logout();
    }
  }

  setLoggedIn(value: boolean) {
    // Update login status subject
    this.loggedIn$.next(value);
    this.loggedIn = value;
  }

  login() {
    // Send the user to the authenticaition server
  //  window.location.href('127.0.0.1:8000/login');
  }

  public handleAuthentication(): void {
    // this.auth0.parseHash((err, authResult) => {
    //   if (authResult && authResult.accessToken && authResult.idToken) {
    //     window.location.hash = '';
    //     this.setSession(authResult);
    //     this.router.navigate(['/']);
    //   } else if (err) {
    //     this.router.navigate(['/']);
    //     console.log(err);
    //   }
    // });
  }

  private setSession(authResult): void {
    // Set the time that the Access Token will expire at
    const expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);
  }

  public logout(): void {
    // Remove tokens and expiry time from localStorage
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    // Go back to the home route
    this.router.navigate(['/']);
  }

  public isAuthenticated(): boolean {
    // Check whether the current time is past the
    // Access Token's expiry time
    return true;
    // const expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    // return new Date().getTime() < expiresAt;
  }
}
