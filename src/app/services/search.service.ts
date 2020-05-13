import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class SearchService {
  constructor(private http: HttpClient) {}
  searchMovie(movieName): Observable<any> {
    return this.http.get(`https://www.omdbapi.com/?apikey=d3f5a995&t=${movieName}&plot`)
  }

}
