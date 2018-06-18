import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable ,  of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Wallet } from './wallet.model';

@Injectable()
export class WalletService {

  private walletsUrl = 'api/wallets';
  constructor(private http: HttpClient) { }

    /** GET Wallet by logged in user. Will 404 if id not found */
    getWallet(id: number): Observable<Wallet> {
      const url = `${this.walletsUrl}/user`;
      return this.http.get<Wallet>(url).pipe(
        catchError(this.handleError<Wallet>(`getWallet`))
      );
    }

    updateWallet (wallet: Wallet): Observable<Wallet> {
      const url = `${this.walletsUrl}/${wallet.id}`;
      return this.http.put(url, wallet).pipe(
        catchError(this.handleError<any>('updateWallet'))
      );
    }

    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    private handleError<T> (operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {

        console.error(error); // log to console instead
        // Let the app keep running by returning an empty result.
        return of(result as T);
      };
    }

}
