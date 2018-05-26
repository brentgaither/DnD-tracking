
import {throwError as observableThrowError,  Observable } from 'rxjs';

import {catchError} from 'rxjs/operators';
import { Injectable, Injector } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';




@Injectable()
export class MyHttpInterceptor implements HttpInterceptor {
constructor() { }

intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

// Clone the request to add the new header.
const authReq = req.clone({ headers: req.headers.set('headerName', 'headerValue')});

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
