import Hero from '@/components/hero';
import ShowsContainer from '@/components/shows-container';
import { MediaType, type Show } from '@/types';
import { siteConfig } from '@/configs/site';
import { RequestType, type ShowRequest } from '@/enums/request-type';
import MovieService from '@/services/MovieService';
import { Genre } from '@/enums/genre';
import { getRandomShow } from '@/lib/utils';

export const revalidate = 3600;

export default async function Home() {
  const h1 = `${siteConfig.name} Home`;
  const requests: ShowRequest[] = [
    {
      title: 'Trending Now',
      req: { requestType: RequestType.TRENDING, mediaType: MediaType.ALL },
      visible: true,
    },
    {
      title: 'Netflix TV Shows',
      req: { requestType: RequestType.NETFLIX, mediaType: MediaType.TV },
      visible: true,
    },
    {
      title: 'Popular TV Shows',
      req: {
        requestType: RequestType.TOP_RATED,
        mediaType: MediaType.TV,
        genre: Genre.TV_MOVIE,
      },
      visible: true,
    },
    {
      title: 'Korean Movies',
      req: {
        requestType: RequestType.KOREAN,
        mediaType: MediaType.MOVIE,
        genre: Genre.THRILLER,
      },
      visible: true,
    },
    {
      title: 'Comedy Movies',
      req: {
        requestType: RequestType.GENRE,
        mediaType: MediaType.MOVIE,
        genre: Genre.COMEDY,
      },
      visible: true,
    },
    {
      title: 'Action Movies',
      req: {
        requestType: RequestType.GENRE,
        mediaType: MediaType.MOVIE,
        genre: Genre.ACTION,
      },
      visible: true,
    },
    {
      title: 'Romance Movies',
      req: {
        requestType: RequestType.GENRE,
        mediaType: MediaType.MOVIE,
        genre: Genre.ROMANCE,
      },
      visible: true,
    },
    {
      title: 'Scary Movies',
      req: {
        requestType: RequestType.GENRE,
        mediaType: MediaType.MOVIE,
        genre: Genre.THRILLER,
      },
      visible: true,
    },
  ];
  const allShows = await MovieService.getShows(requests);
  const randomShow: Show | null = getRandomShow(allShows);
  return (
    <>
      <h1 className="hidden">{h1}</h1>
      <Hero randomShow={randomShow} />
      <ShowsContainer shows={allShows} />
    </>
  );
}
