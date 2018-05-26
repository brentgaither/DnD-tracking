import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {APP_BASE_HREF} from '@angular/common';

import { AppComponent } from './app.component';
import { AuthService } from './auth/auth.service';
import { observable } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { RouterModule, Route, Routes } from '@angular/router';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let componentAuthService: AuthService; // the actually injected service
  let authService: AuthService; // the TestBed injected service
  let authServiceStub;
  const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
  ];

  beforeEach(async(() => {
    authServiceStub = {
      handleAuthentication() {return; },
    };
    TestBed.configureTestingModule({
      imports: [ FormsModule, RouterModule.forRoot(routes), ],
      declarations: [ AppComponent ],
      providers: [
        {provide: AuthService, useValue: authServiceStub},
        {provide: APP_BASE_HREF, useValue : '/' }
      ]
    })
    .compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    authService = fixture.debugElement.injector.get(authService);
    componentAuthService = authService;
    // WalletService from the root injector
    authService = TestBed.get(AuthService);
  });
  it('should create the app', async(() => {
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'D&D tracking'`, async(() => {
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('D&D tracking');
  }));
});
