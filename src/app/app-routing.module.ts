import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { BookComponent } from './book/book.component';
const routes: Routes = [
  { path: '', component: BookComponent },
  { path: 'book', component: BookComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
