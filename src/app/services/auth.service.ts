import {Injectable} from '@angular/core';
import {Platform} from '@ionic/angular';
import {HttpClient} from '@angular/common/http';
import {NativeStorage} from '@ionic-native/native-storage/ngx';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

    token;
  constructor(
      private http: HttpClient,
      private storage: NativeStorage,
      private platform: Platform
  ) { }


  login(data) {
      return this.http.post<any>(`${environment.BASE_URL}/api/auth/login`, data);
  }

  logout() {
      return this.http.get(`${environment.BASE_URL}/api/user/logout`);
  }

  async loadtoken() {
    const promise = new Promise((resolve, reject) => {
      if (this.platform.is('cordova')) {
        this.storage.getItem('access_token')
            .then(data => {
              this.token = data;
              return resolve();
            }, err => {
              return reject();
            });
      } else {
        this.token = localStorage.getItem('access_token');
        return resolve();
      }
    });
    return await promise;
  }

  async storetoken() {
      const promise = new Promise((resolve, reject) => {
          if (this.platform.is('cordova')) {
              this.storage.setItem('access_token', this.token)
                  .then(() => {
                      console.log(`${this.token} stored`);
                      return resolve();
                  }, err => {
                      console.log(`error trying store ${this.token}`);
                      return resolve();
                  });
          } else {
              localStorage.setItem('access_token', this.token);
              return resolve();
          }
      });
      return await promise;
  }
}
