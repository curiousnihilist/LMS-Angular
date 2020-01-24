import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//forms
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';


//http
import { HttpClientModule } from '@angular/common/http';

// DtaePipe
import { DatePipe } from '@angular/common';

//HTTPInterceptor
import {  HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddBookComponent } from './add-book/add-book.component';
import { SearchBooksComponent } from './search-books/search-books.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { BookCardComponent } from './search-books/book-card/book-card.component';
import { BasicAuthHtppInterceptorService } from './service/auth-interceptor.service';
import { CustDashboardComponent } from './cust-dashboard/cust-dashboard.component';
import { ViewAccountComponent } from './cust-dashboard/view-account/view-account.component';
import { IssuedBooksComponent } from './cust-dashboard/issued-books/issued-books.component';
import { ReturnBooksComponent } from './cust-dashboard/return-books/return-books.component';
import { RouteGaurd } from './service/route-gaurd.service';
import { BookDetailsComponent } from './book-details/book-details.component';
import { ModalModule } from 'ngx-bootstrap/modal';


@NgModule({
  declarations: [
    AppComponent,
    AddBookComponent,
    SearchBooksComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    BookCardComponent,
    CustDashboardComponent,
    ViewAccountComponent,
    IssuedBooksComponent,
    ReturnBooksComponent,
    BookDetailsComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ModalModule.forRoot()
  ],
  providers: [CookieService, DatePipe, RouteGaurd,{provide: HTTP_INTERCEPTORS, useClass: BasicAuthHtppInterceptorService, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
