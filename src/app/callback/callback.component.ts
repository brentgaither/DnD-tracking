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
    this.route.queryParams.subscribe(params => {
      this.accessToken = params['code'];
  });
    this.authService.getToken(this.accessToken).subscribe(
      token => {this.authService.setSession(token); }
    );
  }

}
