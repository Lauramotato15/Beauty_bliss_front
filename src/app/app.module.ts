import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from './auth/auth.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SharedModule } from "./shared/shared.module";
import { ProductModule } from './products/product.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { ExceptionInterceptor } from './interceptors/exception.interceptor';
import { SessionInterceptor } from './interceptors/session.interceptor';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    AuthModule,
    BrowserModule,
    SharedModule,
    ProductModule,
    HttpClientModule,
  ],
  providers: [
    { 
      provide: HTTP_INTERCEPTORS, 
      useClass: SessionInterceptor, 
      multi: true
    },
    { 
      provide: HTTP_INTERCEPTORS, 
      useClass: TokenInterceptor, 
      multi: true
    },
    { 
      provide: HTTP_INTERCEPTORS, 
      useClass: ExceptionInterceptor, 
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
