
import {HttpErrorResponse,  HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {ToastController} from '@ionic/angular';
import {Router} from '@angular/router';
import {Observable, throwError} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {AuthService} from '../services/auth.service';
import {AlertService} from '../services/alert.service';



@Injectable()
export class TokenInterceptor implements HttpInterceptor {

    constructor(
        private router: Router,
        public toastController: ToastController,
        private auth: AuthService,
        private alert: AlertService
    ) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.auth.loadtoken();
        if (this.auth.token) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${this.auth.token}`
                }
            });
        }

        if (!request.headers.has('Content-Type')) {
            request = request.clone({
                setHeaders: {
                    'content-type': 'application/json'
                }

            });
        }

        request = request.clone({
            headers: request.headers.set('Accept', 'application/json')
        });

        return next.handle(request).pipe(
            map((event: HttpEvent<any>) => {
                return event;
            }),
            catchError((error: HttpErrorResponse) => {
                if ( [400, 401].includes(error.status)) {
                    this.alert.presentAlert('Token ausente o invalido');
                } else {
                    this.router.navigate(['login']);
                }
                return throwError(error);
            })
        )
    }


}
