import { Injectable, Inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AUTH_CONFIG } from './auth-config';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { AuthResult } from './authResult.model';
import { User } from './user.model';

@Injectable()
export class AuthService {

  token: any;

  // Create a stream of logged in status to communicate throughout app
  loggedIn: boolean;
  user: User;
  loggedIn$ = new BehaviorSubject<boolean>(this.loggedIn);
  private authUrl = 'oauth/token';

  constructor(private router: Router, private http: HttpClient) {  }

  getToken (): string {
    return localStorage.getItem('access_token');
  }

  public tryLogin() {
    if (!this.isAuthenticated()) {
       // Send the user to the authenticaition server
        location.href = encodeURI(AUTH_CONFIG.AUTHENTICATION_SERVER + '?' + 'client_id=' + AUTH_CONFIG.CLIENT_ID
        + '&redirect_uri=' + AUTH_CONFIG.REDIRECT + '&response_type=' + AUTH_CONFIG.RESPONSE_TYPE);
    }
    this.currentUser();
  }


  public setSession(urlFragment): void {
    const authResult = this.parseQueryString(urlFragment);
    // Set the time that the Access Token will expire at
    const expiresAt = JSON.stringify((authResult.expires_in * 1000) + new Date().getTime());
    localStorage.setItem('access_token', authResult.access_token);
    localStorage.setItem('token_type', authResult.token_type);
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
    const expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    return new Date().getTime() < expiresAt;
  }

  public currentUser(): User {
    if (this.user) {
      return this.user;
    }
    this.http.get<User>('/api/user').pipe().subscribe(user => this.user = user);
    return this.user;
  }

  private parseQueryString ( queryString ): AuthResult {
    const params = {};
    let queries, temp, i, l;
    // Split into key/value pairs
    queries = queryString.split('&');
    // Convert the array of strings into an object
    for ( i = 0, l = queries.length; i < l; i++ ) {
        temp = queries[i].split('=');
        params[temp[0]] = temp[1];
    }
    const authResult = new AuthResult();
    authResult.access_token =  params['access_token'];
    authResult.expires_in =  params['expires_in'];
    authResult.token_type =  params['token_type'];
    return authResult;
  }
}
