import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {AdminLayoutComponent} from './core/admin-layout/admin-layout.component';
import {PublicLayoutComponent} from './core/public-layout/public-layout.component';
import {TokenInterceptor} from './interceptors/token.interceptor';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { NativeStorage } from '@ionic-native/native-storage/ngx';

@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    PublicLayoutComponent,
  ],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    NativeStorage,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
