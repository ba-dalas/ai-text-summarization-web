import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ErrorHandlerService } from './error-handler.service';
import { Observable, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TextSummarizationService {
   baseUrl =  'http://127.0.0.1:8080';

  constructor (
    private http: HttpClient,
    private readonly errorHandlerService: ErrorHandlerService
  ) {

    // this.bankDbExecutorUrl = baseUrl + '/v1';//baseUrl + contextV1Url + this.resourceUrl

  }

  createTextSummarization (Obj:any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/bank-user`, Obj).pipe(
      // tap(response => console.log(response)),
      catchError(this.errorHandlerService.handleError)
    )
  }

  fileUpload(formData: any) {
    return this.http
      .post<any>(`${this.baseUrl}/upload`, formData)
      .pipe(catchError(this.errorHandlerService.handleError))
  }
}
