'use client';

import { usePathname } from 'next/navigation';
// import { useMounted } from '@/hooks/use-mounted';
// import { useModalStore } from "@/stores/modal"
// import { useProfileStore } from "@/stores/profile"
import { useSearchStore } from '@/stores/search';
import type { CategorizedShows } from '@/types';

// import { api } from "@/lib/api/api"
import { getIdFromSlug } from '@/lib/utils';
import ShowModal from '@/components/shows-modal';
import ShowsCarousel from '@/components/shows-carousel';
import ShowsGrid from '@/components/shows-grid';
// import ShowsSkeleton from '@/components/shows-skeleton';
import { useModalStore } from '@/stores/modal';
import React from 'react';
import { type Show } from '@/types/index';
import { type AxiosResponse } from 'axios';
import MovieService from '@/services/MovieService';

interface ShowsContainerProps {
  show?: Show;
  shows: CategorizedShows[];
}

const ShowsContainer = ({ shows }: ShowsContainerProps) => {
  // const mounted = useMounted();
  const pathname = usePathname();

  // stores
  const modalStore = useModalStore();
  const searchStore = useSearchStore();

  React.useEffect(() => {
    void handleOpenModal();
  }, []);

  const handleOpenModal = async (): Promise<void> => {
    if (!/\d/.test(pathname) || modalStore.open) {
      return;
    }
    const movieId: number = getIdFromSlug(pathname);
    if (!movieId) {
      return;
    }
    try {
      const response: AxiosResponse<Show> = pathname.includes('/tv-shows')
        ? await MovieService.findTvSeries(movieId)
        : await MovieService.findMovie(movieId);
      const data: Show = response.data;
      if (data)
        useModalStore.setState({
          show: data,
          open: true,
          play: true,
          firstLoad: true,
        });
    } catch (error) {}
  };

  // if (!mounted) {
  //   return (
  //     <div className="mt-4 min-h-[800px] pt-[5%]">
  //       <ShowsSkeleton />
  //     </div>
  //   );
  // }

  if (searchStore.query.length > 0) {
    return <ShowsGrid shows={searchStore.shows} query={searchStore.query} />;
  }

  return (
    <>
      {modalStore.open && <ShowModal />}
      {shows.map(
        (item) =>
          item.visible && (
            <ShowsCarousel
              key={item.title}
              title={item.title}
              shows={item.shows ?? []}
            />
          ),
      )}
    </>
  );
};

export default ShowsContainer;
