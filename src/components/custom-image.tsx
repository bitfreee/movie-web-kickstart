import { type ImageProps, type ImageLoaderProps } from 'next/image';
import React, { forwardRef } from 'react';
import Image from 'next/image';
import { env } from '@/env.mjs';

const customLoader = ({ src, width, quality }: ImageLoaderProps) => {
  // local image
  if (src.startsWith('/')) {
    const params = [`w=${width}`];
    if (quality) {
      params.push(`q=${quality}`);
    } else {
      params.push(`q=75`);
    }
    const paramsString = params.join('&');
    let urlEndpoint = '/_next/image';
    if (urlEndpoint.endsWith('/'))
      urlEndpoint = urlEndpoint.substring(0, urlEndpoint.length - 1);
    return `${urlEndpoint}?url=${src}&${paramsString}`;
  }

  const cdn = `${env.NEXT_PUBLIC_IMAGE_DOMAIN}/tmdb:w_${width}`;
  src = src.replace('image.tmdb.org', cdn);
  return src;
};

// const defaultLoader = ({ src, width, quality }: ImageLoaderProps) => {
//   // if (src[0] === "/") src = src.slice(1);
//   const cutOffIndex = src.lastIndexOf('-w');
//   src = cutOffIndex !== -1 ? src.substring(0, cutOffIndex) : src;
//   src = src.replace("'", ''); // hot fix crawl error
//   src = encodeURIComponent(src);
//   const params = [`w=${width}`];
//   if (quality) {
//     params.push(`q=${quality}`);
//   } else {
//     params.push(`q=75`);
//   }
//   const paramsString = params.join('&');
//   let urlEndpoint = '/_next/image';
//   if (urlEndpoint.endsWith('/'))
//     urlEndpoint = urlEndpoint.substring(0, urlEndpoint.length - 1);
//   return `${urlEndpoint}?url=${src}&${paramsString}`;
// };
//

const CustomImage = forwardRef(function CustomImage(
  props: ImageProps,
  ref: React.Ref<HTMLImageElement>,
) {
  return (
    <Image
      {...props}
      loader={customLoader}
      ref={ref}
      alt={props.alt || env.NEXT_PUBLIC_SITE_NAME}
    />
  );
});

export default CustomImage;
