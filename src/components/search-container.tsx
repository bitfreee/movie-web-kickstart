'use client';

import React from 'react';
import type { Show } from '@/types';
import ShowsGrid from '@/components/shows-grid';
import { useSearchStore } from '@/stores/search';
import { handleDefaultSearchBtn, handleDefaultSearchInp } from '@/lib/utils';

interface SearchContainer {
  query: string;
  shows: Show[];
}

function SearchContainer({ shows, query }: SearchContainer) {
  const searchStore = useSearchStore();

  React.useEffect(() => {
    searchStore.setOpen(true);
    searchStore.setQuery(query);
    searchStore.setShows(shows);
    const timer1: NodeJS.Timeout = setTimeout(() => {
      handleDefaultSearchBtn();
    }, 5);
    const timer2: NodeJS.Timeout = setTimeout(() => {
      handleDefaultSearchInp();
    }, 10);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return <ShowsGrid shows={searchStore.shows} query={searchStore.query} />;
}

export default SearchContainer;
