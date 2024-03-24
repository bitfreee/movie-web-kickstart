import { type MediaType, type Show } from '@/types';
import { type Genre } from './genre';

export enum RequestType {
  TRENDING = 'trending',
  TOP_RATED = 'top_rated',
  NETFLIX = 'netflix',
  POPULAR = 'popular',
  GENRE = 'genre',
  KOREAN = 'korean',
  DEFAULT = 'default',
}

export type TmdbPagingResponse = {
  results: Show[];
  page: number;
  totalPages: number;
  totalResults: number;
};

export type TmdbRequest = {
  requestType: RequestType;
  mediaType: MediaType;
  genre?: Genre;
  page?: number;
};

export type ShowRequest = {
  title: string;
  req: TmdbRequest;
  visible: boolean;
};
