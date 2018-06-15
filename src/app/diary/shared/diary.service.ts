import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable ,  of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Diary } from './diary.model';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class DiaryService {
  private diariesUrl = 'api/diaries';

  constructor(private http: HttpClient) { }

  getDairies(): Observable<Diary[]> {
    return this.http.get<Diary[]>(this.diariesUrl)
    .pipe(
      catchError(this.handleError('getDiaries', []))
    );
  }

  /** GET diary by id. Will 404 if id not found */
  getDiary(id: number): Observable<Diary> {
    const url = `${this.diariesUrl}/${id}`;
    return this.http.get<Diary>(url).pipe(
      catchError(this.handleError<Diary>(`getDiary id=${id}`))
    );
  }

  addiary (diary: Diary): Observable<Diary> {
    return this.http.post<Diary>(this.diariesUrl, diary).pipe(
      catchError(this.handleError<Diary>('addDiary'))
    );
  }
  updateDiary (diary: Diary): Observable<Diary> {
    const url = `${this.diariesUrl}/${diary.id}`;
    return this.http.put(url, diary, httpOptions).pipe(
      catchError(this.handleError<any>('updateDiary'))
    );
  }

    /** DELETE: delete the hero from the server */
  deleteDiary (diary: Diary | number): Observable<Diary> {
    const id = typeof diary === 'number' ? diary : diary.id;
    const url = `${this.diariesUrl}/${id}`;

    return this.http.delete<Diary>(url).pipe(
      catchError(this.handleError<Diary>('deleteDiary'))
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
