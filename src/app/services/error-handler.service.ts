import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {

  handleError(err: any) {
    // console.log(err)

    let errorMessage: string;
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error?.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      // errorMessage = `Backend returned code ${err.status}: ${err.body?.error ?? 'No response body available'}`;

      // errorMessage = `Request Failed. Status Code: ${err.status}
      // , Message: ${err.error?.message
      //     ? err.error?.message
      //     : (err.error?.error
      //       ? err.error?.error
      //       : err.statusText)}`;
      errorMessage = err.error?.message
      ? err.error?.message
      : (err.error?.error
        ? err.error?.error
        : err.statusText);

      if(err.status == 500) {
        errorMessage = 'Request Failed';
      }
    }

    // console.error(err);
    // console.log(errorMessage);
    return throwError(errorMessage);
  }
}
