import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class LoginService {
  constructor() {}
  setLogLocalStorage(check) {
    localStorage.setItem("loggedin", check);
  }

  getLogLocalStorage() {
    let check = localStorage.getItem("loggedin");
    return check;
  }
}
