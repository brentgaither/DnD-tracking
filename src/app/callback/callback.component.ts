import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-callback',
  templateUrl: './callback.component.html',
  styleUrls: ['./callback.component.css']
})
export class CallbackComponent implements OnInit {

  constructor(private authService: AuthService, private route: ActivatedRoute) { }

  accessToken: string;
  ngOnInit() {
    this.route.fragment.subscribe((fragment: string) => {
      this.authService.setSession(fragment);
    });
    location.href = '/';
  }
}
