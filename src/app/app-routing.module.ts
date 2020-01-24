import { NgModule } from '@angular/core';
import { Routes, RouterModule, RouterLink } from '@angular/router';
import { AddBookComponent } from './add-book/add-book.component';
import { SearchBooksComponent } from './search-books/search-books.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { CustDashboardComponent } from './cust-dashboard/cust-dashboard.component';
import { RouteGaurd } from './service/route-gaurd.service';
import { BookDetailsComponent } from './book-details/book-details.component';

const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'home',component: HomeComponent},
  {path:'add', component: AddBookComponent, canActivate: [RouteGaurd]},
  {path:'search', component : SearchBooksComponent},
  {path:'login',component: LoginComponent},
  {path:'register',component: RegisterComponent},
  {path:'cust-dashboard', component: CustDashboardComponent, canActivate: [RouteGaurd]},
  {path:'view-book', component:BookDetailsComponent, canActivate: [RouteGaurd]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
