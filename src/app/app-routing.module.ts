import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ErrorComponent } from './error/error.component';
import { BooksComponent } from './books/books.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'welcome/:name', component: WelcomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'books', component: BooksComponent},
  {path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
