import { MovieModel } from 'models';

const movie1: MovieModel = {
  id: 'tt0111161',
  title: 'The Shawshank Redemption',
  poster: 'https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
  year: '1994',
  plot: "Chronicles the experiences of a formerly successful banker as a prisoner in the gloomy jailhouse of Shawshank after being found guilty of a crime he did not commit. The film portrays the man's unique way of dealing with his new, torturous life; along the way he befriends a number of fellow prisoners, most notably a wise long-term inmate named Red.",
  runtime: '142 min',
  genre: 'Drama',
  production: 'Columbia Pictures, Castle Rock Entertainment',
  country: 'United States',
  director: 'Frank Darabont',
  writer: 'Stephen King, Frank Darabont',
  actors: 'Tim Robbins, Morgan Freeman, Bob Gunton',
  awards: 'Nominated for 7 Oscars. 21 wins & 43 nominations total'
};

export const movies = [
  movie1
];
