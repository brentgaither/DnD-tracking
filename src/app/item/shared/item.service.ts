import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable ,  of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Item } from './item.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ItemService {
  private itemsUrl = 'api/items';

  constructor(private http: HttpClient) { }

  getItems(): Observable<Item[]> {
    return this.http.get<Item[]>(this.itemsUrl)
    .pipe(
      catchError(this.handleError('getItems', []))
    );
  }

  /** GET item by id. Will 404 if id not found */
  getItem(id: number): Observable<Item> {
    const url = `${this.itemsUrl}/${id}`;
    return this.http.get<Item>(url).pipe(
      catchError(this.handleError<Item>(`getItem id=${id}`))
    );
  }

  addItem (item: Item): Observable<Item> {
    return this.http.post<Item>(this.itemsUrl, item).pipe(
      catchError(this.handleError<Item>('addItem'))
    );
  }
  updateItem (item: Item): Observable<Item> {
    const url = `${this.itemsUrl}/${item.id}`;
    return this.http.put(url, item, httpOptions).pipe(
      catchError(this.handleError<any>('updateItem'))
    );
  }

    /** DELETE: delete the hero from the server */
  deleteItem (item: Item | number): Observable<Item> {
    const id = typeof item === 'number' ? item : item.id;
    const url = `${this.itemsUrl}/${id}`;

    return this.http.delete<Item>(url).pipe(
      catchError(this.handleError<Item>('deleteItem'))
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
