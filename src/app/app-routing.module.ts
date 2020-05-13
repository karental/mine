import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SearchComponent } from './components/search/search.component';
import { AuthService } from './services/auth.service';

const routes: Routes = [
  {path:"login", component:LoginComponent},
  {path:"search", component:SearchComponent, canActivate: [AuthService]},
  {path:"",  redirectTo: '/search', pathMatch: 'full'},
  {path: '**', redirectTo: '/search', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
