import {MovieDetails } from './movie-details.model'

export interface Movie {
  count: number,
  next: any,
  previous: [],
  results: MovieDetails[],
}
