// import { async, ComponentFixture, TestBed } from '@angular/core/testing';

// import { CallbackComponent } from './callback.component';
// import { MatProgressSpinnerModule } from '@angular/material';
// import { AuthService } from '../auth/auth.service';
// import { MaterialModule } from '../material/material.module';
// import { RouterTestingModule } from '@angular/router/testing';
// import { Observable } from 'rxjs/Observable';
// import { ActivatedRouteStub, ActivatedRoute } from '../testing/activated-route';
// import { Router } from '@angular/router';

// let component: CallbackComponent;
// let fixture: ComponentFixture<CallbackComponent>;
// let componentAuthService: AuthService; // the actually injected service
// let authService: AuthService; // the TestBed injected service
// let authServiceStub;
// let activatedRoute: ActivatedRouteStub;
// describe('CallbackComponent', () => {
//   beforeEach(async(() => {
//     const routerSpy = createRouterSpy();
//     authServiceStub = {
//       isAuthenticated() {return true; },
//       tryLogin() {return; }
//     };
//     TestBed.configureTestingModule({
//       imports: [MaterialModule],
//       declarations: [ CallbackComponent ],
//       providers: [
//         {provide: AuthService, useValue: authServiceStub},
//         { provide: ActivatedRoute, useValue: activatedRoute },
//         { provide: Router,         useValue: routerSpy},
//       ]
//     })
//     .compileComponents();
//   }));

//   beforeEach(() => {
//     activatedRoute = new ActivatedRouteStub();
//     fixture = TestBed.createComponent(CallbackComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//     authService = fixture.debugElement.injector.get(AuthService);
//     componentAuthService = authService;
//     authService = TestBed.get(AuthService);
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });

// function createRouterSpy() {
//   return jasmine.createSpyObj('Router', ['navigate']);
// }
