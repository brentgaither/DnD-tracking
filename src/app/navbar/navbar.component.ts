import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(private authService: AuthService) {}

  public logout(): void {
    this.authService.logout();
  }
  public login(): void {
    this.authService.tryLogin();
  }

  public authenticated(): boolean {
    return this.authService.isAuthenticated();
  }
}
