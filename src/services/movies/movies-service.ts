/* eslint-disable */
// services
import { AxiosResponse } from 'axios';
import { axiosInstance } from 'services/axios';
// models
import { MovieModel } from 'models';
// types
import { FetchMoviesResponseType } from './movies-responses-types';
import { MoviesError } from './movies-error';
import { ParameterNotValidatedError } from '../parameter-not-validated-error';

const sleep = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

// SERVICE
export class MoviesService {
  // -> FETCH MOVIES
  static async fetchMovies(ids: string[]): Promise<MovieModel[]> {
    try {
      // Check parameters
      if (ids.length === 0) {
        throw new ParameterNotValidatedError('Нет данных для загрузки');
      }
      // Do a request
      const responses: AxiosResponse<FetchMoviesResponseType>[] = await Promise.all(
        ids.map(
          (id) => axiosInstance.get<FetchMoviesResponseType>(`/?i=${id}`)
        )
      );

      // Test skeletons
      await sleep(2000);
      
      //
      const movies: MovieModel[] = responses
        // Select the correct data
        .filter((item) => item.status === 200 && item.data.Response !== 'False')
        // Transform the response data to the required format
        .map(({ data }) => {
          const movie: MovieModel = {
            id: data.imdbID,
            title: data.Title,
            poster: data.Poster,
            year: data.Year,
            plot: data.Plot,
            runtime: data.Runtime,
            genre: data.Genre,
            production: data.Production,
            country: data.Country,
            director: data.Director,
            writer: data.Writer,
            actors: data.Actors,
            awards: data.Awards
          };

          return movie;
        });

      return movies;
    } catch (err) {
      throw new MoviesError('Не удалось загрузить данные с сервера');
    }
  }
}
