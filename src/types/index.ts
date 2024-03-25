// import type { MEDIA_TYPE } from "@prisma/client";

export enum MediaType {
  ALL = 'all',
  TV = 'tv',
  MOVIE = 'movie',
}

export type CategorizedShows = {
  title: string;
  shows: Show[];
  visible: boolean;
};

export type NavItem = {
  title: string;
  href?: string;
  disabled?: boolean;
  external?: boolean;
  icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  onClick?: () => void;
};

export type Show = {
  adult: boolean;
  backdrop_path: string | null;
  media_type: MediaType;
  // media_type: string;
  budget: number | null;
  homepage: string | null;
  showId: string;
  id: number;
  imdb_id: string | null;
  original_language: string;
  original_title: string | null;
  overview: string | null;
  popularity: number;
  poster_path: string | null;
  number_of_seasons: number | null;
  number_of_episodes: number | null;
  release_date: string | null;
  first_air_date: string | null;
  last_air_date: string | null;
  revenue: number | null;
  runtime: number | null;
  status: string | null;
  tagline: string | null;
  title: string | null;
  name: string | null;
  video: boolean;
  vote_average: number;
  vote_count: number;
  original_name?: string;
};

export type KeyWord = {
  id: number;
  name: string;
};

export type KeyWordResponse = {
  id: number;
  keywords: KeyWord[];
  results: KeyWord[];
};

export type Genre = {
  id: number;
  name: string | null;
};

export type VideoType =
  | 'Bloopers'
  | 'Featurette'
  | 'Behind the Scenes'
  | 'Clip'
  | 'Trailer'
  | 'Teaser';

export type VideoResult = {
  iso_639_1: string;
  iso_3166_1: string;
  name: string;
  key: string;
  site: string;
  size: number;
  type: VideoType;
  official: boolean;
  published_at: string;
  id: string;
};

export type ShowWithGenreAndVideo = Show & {
  genres: Genre[];
  videos?: {
    results: VideoResult[];
  };
};

export interface IStack<T> {
  push(item: T): void;
  pop(): T | undefined;
  peek(): T | undefined;
  size(): number;
}
