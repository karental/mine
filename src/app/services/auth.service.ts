import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { LoginService } from "./login.service";

@Injectable({
  providedIn: "root",
})
export class AuthService implements CanActivate {
  public isLoggedIn: any = false;
  public redirectUrl: string;
  constructor(private router: Router, private loginService: LoginService) {}

  public canActivate() {
    let storageLogged = this.loginService.getLogLocalStorage();
    if (storageLogged === null) {
      this.loginService.setLogLocalStorage("false");
      storageLogged = "false";
    }
    this.isLoggedIn = storageLogged;
    return this.checkLogin(this.isLoggedIn);
  }
  loggedIn(isLogged) {
    this.loginService.setLogLocalStorage(isLogged);
    this.isLoggedIn = isLogged;
    this.canActivate();
  }
  checkLogin(isLoggedIn): boolean {
    if (isLoggedIn === "true") {
      return true;
    } else if (isLoggedIn === "false") {
      this.router.navigateByUrl("/login");
      return false;
    }
  }
}
