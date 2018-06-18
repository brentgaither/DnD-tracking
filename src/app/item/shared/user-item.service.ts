import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable ,  of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { UserItem } from './user-item.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class UserItemService {
  private userItemsUrl = 'api/usersItems';

  constructor(private http: HttpClient) { }

  getUserItems(): Observable<UserItem[]> {
    return this.http.get<UserItem[]>(this.userItemsUrl)
    .pipe(
      catchError(this.handleError('getItems', []))
    );
  }

  /** GET item by id. Will 404 if id not found */
  getUserItem(id: number): Observable<UserItem> {
    const url = `${this.userItemsUrl}/${id}`;
    return this.http.get<UserItem>(url).pipe(
      catchError(this.handleError<UserItem>(`getItem id=${id}`))
    );
  }

  addUserItem (userItem: UserItem): Observable<UserItem> {
    return this.http.post<UserItem>(this.userItemsUrl, userItem).pipe(
      catchError(this.handleError<UserItem>('addUserItem'))
    );
  }
  updateUserItem (userItem: UserItem): Observable<UserItem> {
    const url = `${this.userItemsUrl}/${userItem.id}`;
    return this.http.put(url, userItem, httpOptions).pipe(
      catchError(this.handleError<any>('updateItem'))
    );
  }

    /** DELETE: delete the hero from the server */
  deleteUserItem (useritem: UserItem | number): Observable<UserItem> {
    const id = typeof useritem === 'number' ? useritem : useritem.id;
    const url = `${this.userItemsUrl}/${id}`;

    return this.http.delete<UserItem>(url).pipe(
      catchError(this.handleError<UserItem>('deleteUserItem'))
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

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
