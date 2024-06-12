import { motion } from 'framer-motion';

import { Skeleton } from '@/components/ui/skeleton';
import { itemFade, itemsReveal } from '@/lib/constants';
import { cn } from '@/lib/utils';
import { useSearchStore } from '@/stores/search';
import CustomImage from './custom-image';

interface ShowsSkeletonProps {
  count?: number;
  classname?: string;
  variant?: 'with-title' | 'without-title';
}

const ShowsSkeleton = ({
  count = 6,
  classname = '',
  variant = 'with-title',
}: ShowsSkeletonProps) => {
  const searchStore = useSearchStore();

  return (
    <>
      {variant === 'with-title' ? (
        <div
          className={cn(
            'no-scrollbar container mx-0 w-full max-w-[100%] overflow-x-auto overflow-y-hidden',
            classname,
          )}>
          <Skeleton className="h-[1.62rem] w-28 rounded bg-neutral-700" />
          <div
            className={cn(
              'xxs:grid-cols-2 xxs:gap-x-1.5 xxs:gap-y-5 mt-2.5 grid w-fit gap-y-3.5 xs:grid-cols-3 xs:gap-y-7 sm:grid-cols-3 sm:gap-y-10 md:grid-cols-4 md:gap-y-12 lg:gap-y-14 xl:grid-cols-6 xl:gap-y-16',
              searchStore.query && 'max-sm:grid-cols-3 max-[375px]:grid-cols-2',
            )}
            // initial="hidden"
            // animate="visible"
            // variants={itemsReveal}>
          >
            {Array.from({ length: count }, (_, i) => (
              <motion.div key={i} variants={itemFade}>
                {/* <picture className="relative aspect-[2/3] md:aspect-video"> */}
                <picture className="relative aspect-[2/3]">
                  {/* <source */}
                  {/*   media="(min-width: 780px)" */}
                  {/*   srcSet={'/images/grey-thumbnail.jpg'} */}
                  {/* /> */}
                  <CustomImage
                    alt={'poster'}
                    src={'/images/grey-thumbnail.jpg'}
                    fill={true}
                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 100vw, 33vw"
                    className="h-full w-full cursor-pointer rounded-lg px-1 transition-all md:hover:scale-110"
                    style={{ objectFit: 'cover' }}
                  />
                </picture>
              </motion.div>
            ))}
          </div>
        </div>
      ) : (
        <motion.div
          className="no-scrollbar container mx-0 flex w-full items-center gap-1.5 overflow-x-auto overflow-y-hidden"
          initial="hidden"
          animate="visible"
          variants={itemsReveal}>
          {Array.from({ length: count }, (_, i) => (
            <motion.div key={i} variants={itemFade}>
              <Skeleton className="aspect-[2/3] min-w-[15rem] rounded bg-neutral-700" />
            </motion.div>
          ))}
        </motion.div>
      )}
    </>
  );
};

export default ShowsSkeleton;
