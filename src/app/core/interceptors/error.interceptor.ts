import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { catchError, elementAt, Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(private router: Router, private toastr: ToastrService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((error) => {
        if (error instanceof HttpErrorResponse) {
          if (error.error instanceof ErrorEvent) {
            alert('Error Event');
          } else {
            switch (error.status) {
              case 400:
                alert(error.statusText);
                break;
              case 401:
                this.router.navigateByUrl(`/login`);
                this.toastr.error(error.statusText);
                break;
            }
          }
        } else {
          alert('An error occured');
        }
        return throwError(() => new Error(error.statusText));
      })
    );
  }
}
