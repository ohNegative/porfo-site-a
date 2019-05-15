import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GhubService {

  private url = "https://api.github.com/users/ohnegative/repos?per_page=5&sort=updated";

  constructor(private http: HttpClient) { }

  getGhub() {
    return this.http.get(this.url)
      .pipe(
        catchError( this.handleError )
      );

  }

  createGhub(data) {
    return this.http.post(this.url, data);
  }

  handleError(error: HttpErrorResponse) {
    alert( error.message);
    return throwError('Error in HTTP service');
  }

}
