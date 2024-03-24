import { type Genre } from '@/enums/genre';
import { type TmdbPagingResponse } from '@/enums/request-type';
import tmdbClient from '@/lib/apiClient';
import { type MediaType } from '@/types';

export async function getTrendingMovies(mediaType: MediaType, page: number) {
  const { data } = await tmdbClient.get<TmdbPagingResponse>(
    `/trending/${mediaType}/day?language=en-US&page=${page}`,
  );
  return data;
}

export async function getTopRatedMovies(mediaType: MediaType, page: number) {
  const { data } = await tmdbClient.get<TmdbPagingResponse>(
    `/${mediaType}/top_rated?page=${page}&language=en-US`,
  );
  data.results.forEach((movie) => (movie.media_type = mediaType));
  return data;
}

export async function getNetflixOriginals(mediaType: MediaType, page: number) {
  const { data } = await tmdbClient.get<TmdbPagingResponse>(
    `/discover/${mediaType}?with_networks=213&language=en-US&page=${page}`,
  );
  data.results.forEach((movie) => (movie.media_type = mediaType));
  return data;
}

export async function getPopularMovies(mediaType: MediaType, page: number) {
  const { data } = await tmdbClient.get<TmdbPagingResponse>(
    `/${mediaType}/popular?language=en-US&page=${page}`,
  );
  data.results.forEach((movie) => (movie.media_type = mediaType));
  return data;
}

export async function searchMovies(query: string, page: number) {
  const { data } = await tmdbClient.get<TmdbPagingResponse>(
    `/search/multi?query=${encodeURIComponent(
      query,
    )}&language=en-US&page=${page}`,
  );
  console.log(data.results[0]?.media_type);
  data.results.sort((a, b) => {
    return b.popularity - a.popularity;
  });
  return data;
}

export async function getMoviesByGenre(
  mediaType: MediaType,
  genre: Genre,
  page: number,
) {
  const { data } = await tmdbClient.get<TmdbPagingResponse>(
    `/discover/${mediaType}?with_genres=${genre}&language=en-US&page=${page}`,
  );
  data.results.forEach((movie) => (movie.media_type = mediaType));
  return data;
}
