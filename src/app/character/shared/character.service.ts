import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable ,  of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Character } from './character.model';
import { AuthService } from '../../auth/auth.service';


@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  private charactersUrl = 'api/characters';
  constructor(private http: HttpClient, private authService: AuthService) { }

    /** GET Character by logged in user. Will 404 if id not found */
    getMyCharacter(): Observable<Character> {
      const url = `${this.charactersUrl}/mine/` + this.authService.currentUser().id;
      return this.http.get<Character>(url).pipe(
        catchError(this.handleError<Character>(`getCharacter`))
      );
    }

    updateCharacter (character: Character): Observable<Character> {
      const url = `${this.charactersUrl}/${character.id}`;
      return this.http.put(url, character).pipe(
        catchError(this.handleError<any>('updatcharacter'))
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
