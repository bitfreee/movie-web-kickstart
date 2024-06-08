import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const env = createEnv({
  /**
   * Specify your server-side environment variables schema here. This way you can ensure the app
   * isn't built with invalid env vars.
   */
  server: {
    NODE_ENV: z.enum(['development', 'test', 'production']),
  },

  /**
   * Specify your client-side environment variables schema here. This way you can ensure the app
   * isn't built with invalid env vars. To expose them to the client, prefix them with
   * `NEXT_PUBLIC_`.
   */
  client: {
    NEXT_PUBLIC_APP_URL: z.string().url(),
    NEXT_PUBLIC_TMDB_TOKEN: z.string(),
    NEXT_PUBLIC_GOOGLE_ANALYTICS_ID: z.string().optional(),
    NEXT_PUBLIC_SITE_NAME: z.string(),
    NEXT_PUBLIC_TWITTER: z.string().url().optional(),
    NEXT_PUBLIC_FACEBOOK: z.string().url().optional(),
    NEXT_PUBLIC_INSTAGRAM: z.string().url().optional(),
    NEXT_PUBLIC_YOUTUBE: z.string().url().optional(),
    NEXT_PUBLIC_IMAGE_DOMAIN: z.string().optional(),
  },

  /**
   * You can't destruct `process.env` as a regular object in the Next.js edge runtimes (e.g.
   * middlewares) or client-side so we need to destruct manually.
   */
  runtimeEnv: {
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
    NODE_ENV: process.env.NODE_ENV,
    NEXT_PUBLIC_TMDB_TOKEN: process.env.NEXT_PUBLIC_TMDB_TOKEN,
    NEXT_PUBLIC_GOOGLE_ANALYTICS_ID:
      process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID,
    NEXT_PUBLIC_SITE_NAME: process.env.NEXT_PUBLIC_SITE_NAME,
    NEXT_PUBLIC_TWITTER: process.env.NEXT_PUBLIC_TWITTER ?? 'https://x.com',
    NEXT_PUBLIC_FACEBOOK:
      process.env.NEXT_PUBLIC_FACEBOOK ?? 'https://facebook.com',
    NEXT_PUBLIC_INSTAGRAM:
      process.env.NEXT_PUBLIC_INSTAGRAM ?? 'https://instagram.com',
    NEXT_PUBLIC_YOUTUBE:
      process.env.NEXT_PUBLIC_YOUTUBE ?? 'https://youtube.com',
    NEXT_PUBLIC_IMAGE_DOMAIN: process.env.NEXT_PUBLIC_IMAGE_DOMAIN,
  },
  /**
   * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation.
   * This is especially useful for Docker builds.
   */
  skipValidation: !!process.env.SKIP_ENV_VALIDATION,
});
