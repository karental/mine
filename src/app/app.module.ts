import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { SearchComponent } from "./components/search/search.component";
import { LoginComponent } from "./components/login/login.component";
import { MoviesComponent } from './components/movies/movies.component';
import { HeaderComponent } from './components/header/header.component';
import { ErrorComponent } from './error/error.component';
import { AuthService } from './services/auth.service';
import { LogoutComponent } from './components/logout/logout.component';

@NgModule({
  declarations: [
    AppComponent, SearchComponent, LoginComponent, MoviesComponent, HeaderComponent, ErrorComponent, LogoutComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule, HttpClientModule, 
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {}
