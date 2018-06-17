import { Component } from '@angular/core';

import { ItemDetailComponent } from './item/item-detail/item-detail.component';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'D and D tracking';
  constructor(public auth: AuthService) {
    auth.tryLogin();
  }
}
