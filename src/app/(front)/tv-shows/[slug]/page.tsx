import { type Metadata } from 'next';
import { handleMetadata } from '@/lib/utils';
import TvShowPage from '../page';

type Props = {
  params: { slug: string };
  searchParams: Record<string, string | string[] | undefined>;
};

export const revalidate = 3600;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return handleMetadata(params.slug, 'tv-shows', 'tv');
}

export default async function Home() {
  return TvShowPage();
}
