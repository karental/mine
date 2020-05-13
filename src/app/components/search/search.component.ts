import { Component, OnInit } from "@angular/core";
import { SearchService } from "src/app/services/search.service";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.css"],
})
export class SearchComponent implements OnInit {
  movieData: any[] = [];
  message: string = "";

  constructor(private searchService: SearchService) {}

  ngOnInit() {}

  inputValidation(movieTitle) {
    if (movieTitle === "") {
      this.message = "This field is required!";
      this.movieData = [];

      return;
    } else {
      this.message = "";
      this.getMovie(movieTitle);
    }
  }
  getMovie(movieTitle) {
    this.searchService.searchMovie(movieTitle).subscribe((MovieData) => {
      Object.keys(MovieData).forEach((key, index) => {
        if (MovieData[key] === "N/A") {
          MovieData[key] = key + " is not Avalible";
        }
      });
      if (MovieData.Response === "False") {
        this.message = MovieData.Error;
        this.movieData = [];
        return;
      } else {
        this.message = "";
        this.movieData = [MovieData];
      }
    });
  }
}
