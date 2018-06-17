
import {throwError as observableThrowError,  Observable } from 'rxjs';

import {catchError} from 'rxjs/operators';
import { Injectable, Injector } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { AuthService } from './auth/auth.service';

@Injectable()
export class MyHttpInterceptor implements HttpInterceptor {
constructor(private authService: AuthService) { }

intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    // Clone the request to add the new header.
    const authReq = req.clone({ headers: req.headers.set('Authorization', 'Bearer ' + this.authService.getToken())});

    // send the newly created request
    return next.handle(authReq).pipe(
        catchError((error, caught) => {
        // intercept the respons error and displace it to the console
        console.log('Error Occurred');
        console.log(error);
        // return the error to the method that called it
        return observableThrowError(error);
    })) as any;
    }
}
