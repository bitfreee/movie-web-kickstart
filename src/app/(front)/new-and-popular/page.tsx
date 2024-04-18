import Hero from '@/components/hero';
import ShowsContainer from '@/components/shows-container';
import { siteConfig } from '@/configs/site';
import { RequestType, type ShowRequest } from '@/enums/request-type';
import { getRandomShow } from '@/lib/utils';
import MovieService from '@/services/MovieService';
import { MediaType, type Show } from '@/types';

export const revalidate = 3600;

export default async function NewAndPopularPage() {
  const h1 = `${siteConfig.name} New And Popular`;
  const requests: ShowRequest[] = [
    {
      title: 'Netflix',
      req: { requestType: RequestType.NETFLIX, mediaType: MediaType.TV },
      visible: false,
    },
    {
      title: 'Trending TV Shows',
      req: { requestType: RequestType.TRENDING, mediaType: MediaType.TV },
      visible: true,
    },
    {
      title: 'Trending Movies',
      req: { requestType: RequestType.TRENDING, mediaType: MediaType.MOVIE },
      visible: true,
    },
    {
      title: 'Top Rated TV Shows',
      req: { requestType: RequestType.TOP_RATED, mediaType: MediaType.TV },
      visible: true,
    },
    {
      title: 'Top Rated Movies',
      req: { requestType: RequestType.TOP_RATED, mediaType: MediaType.MOVIE },
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
