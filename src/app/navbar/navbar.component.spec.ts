
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarComponent } from './navbar.component';
import { MatToolbarModule, MatListModule, MatSidenavModule, MatIconModule, MatMenuModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthService } from '../auth/auth.service';
import { MaterialModule } from '../material/material.module';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;
  let componentAuthService: AuthService; // the actually injected service
  let authService: AuthService; // the TestBed injected service
  let authServiceStub;

  beforeEach(fakeAsync(() => {
    authServiceStub = {
      isAuthenticated() {return true; },
      tryLogin() {return; }
    };
    TestBed.configureTestingModule({
      imports: [MaterialModule, BrowserAnimationsModule],
      providers: [
        {provide: AuthService, useValue: authServiceStub},
      ],
      declarations: [ NavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    authService = fixture.debugElement.injector.get(AuthService);
    componentAuthService = authService;
    authService = TestBed.get(AuthService);
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
