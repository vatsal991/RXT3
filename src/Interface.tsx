import Movies from "./assets/MovieDetail.json";
import Filter from "./assets/FIlter.json";

export interface MoviesInterface {
  MovieID: number;
  MovieName: string;
  Details: {
    DirectorName: string;
    ActorsNames: string[];
    VideoLink: string;
  };
}

export interface FilterInterface {
  Directors: string[];

  Movies: {
    MovieID: number;
    MovieName: string;
  }[];

  Actors: string[];
}

export const MoviesDetails: MoviesInterface[] = Movies;
export const Filters: FilterInterface = Filter;
