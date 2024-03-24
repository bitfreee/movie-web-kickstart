import { Icons } from "@/components/icons";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { siteConfig } from "@/configs/site";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Index() {
  return (
    <>
      <section
        id="hero"
        aria-labelledby="hero-heading"
        className="container mx-auto flex flex-col items-center justify-center gap-4 pb-8 pt-28 text-center md:pb-12 lg:py-32"
      >
        <Link href={siteConfig.links.twitter} target="_blank" rel="noreferrer">
          <Badge
            aria-hidden="true"
            className="rounded-md px-3.5 py-1.5"
            variant="secondary"
          >
            <Icons.twitter className="mr-2 h-3.5 w-3.5" />
            Follow along on Twitter
          </Badge>
          <span className="sr-only">Twitter</span>
        </Link>
        <h1 className="max-w-screen-lg text-center font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
          {siteConfig.name} - {siteConfig.slogan}
          {/* {siteConfig.name} - watch tv shows online, watch movies online. */}
          {/* An e-commerce skateshop built with everything new in Next.js 13 */}
        </h1>
        <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          Step into a world where entertainment knows no boundaries, where your
          screens come alive with an endless array of captivating stories.
        </p>
        <div className="space-x-4">
          <Link className={`${buttonVariants({ size: "lg" })}`} href="/home">
            Watch Now <ArrowRight className="ml-1 inline-block" />
          </Link>
          {/* <Link className={`${buttonVariants({ size: "lg", variant: "outline" })}`} href={siteConfig.links.github} target="_blank" */}
          {/*   rel="noreferrer">GitHub</Link> */}
        </div>
      </section>
      <section
        id="features"
        className="container space-y-6 bg-slate-50 py-8 dark:bg-transparent md:py-12 lg:py-24"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
            Features
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            {siteConfig.name} offers a host of powerful features designed to
            enhance your movie-watching experience.
          </p>
        </div>
        <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <svg viewBox="0 0 24 24" className="h-12 w-12 fill-current">
                <path d="M0 12C0 5.373 5.373 0 12 0c4.873 0 9.067 2.904 10.947 7.077l-15.87 15.87a11.981 11.981 0 0 1-1.935-1.099L14.99 12H12l-8.485 8.485A11.962 11.962 0 0 1 0 12Zm12.004 12L24 12.004C23.998 18.628 18.628 23.998 12.004 24Z" />
              </svg>
              <div className="space-y-2">
                <h3 className="font-bold">Vast Movie Library</h3>
                <p className="text-sm text-muted-foreground">
                  Thousands of movies, spanning diverse genres, languages, and
                  decades.
                </p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <svg className="h-12 w-12 fill-current" viewBox="0 0 24 24">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
              <div className="space-y-2">
                <h3 className="font-bold">Personalized Recommendations</h3>
                <p className="text-sm text-muted-foreground">
                  Suggesting movies and shows tailored to your taste.
                </p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <svg className="h-12 w-12 fill-current" viewBox="0 0 24 24">
                <path d="M4 1.5C2.17363 1.5 0.5 2.9003 0.5 4.85714V14.1429C0.5 16.0997 2.17363 17.5 4 17.5H10.5V19.5H7.5C6.94772 19.5 6.5 19.9477 6.5 20.5V21.5C6.5 22.0523 6.94771 22.5 7.5 22.5H16.5C17.0523 22.5 17.5 22.0523 17.5 21.5V20.5C17.5 19.9477 17.0523 19.5 16.5 19.5H13.5V17.5H20C21.8264 17.5 23.5 16.0997 23.5 14.1429V4.85714C23.5 2.9003 21.8264 1.5 20 1.5H4Z" />
              </svg>
              <div className="space-y-2">
                <h3 className="font-bold">Multiple Device Support</h3>
                <p className="text-sm text-muted-foreground">
                  Including smart TVs, smartphones, tablets, laptops, and gaming
                  consoles.
                </p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <svg viewBox="0 0 24 24" className="h-12 w-12 fill-current">
                <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
              </svg>
              <div className="space-y-2">
                <h3 className="font-bold">Watch Party</h3>
                <p className="text-sm text-muted-foreground">
                  Watch together with friends. Chat and react in real time to
                  the same stream.
                </p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                className="h-12 w-12 fill-current"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
              <div className="space-y-2">
                <h3 className="font-bold">High-Definition Streaming</h3>
                <p className="text-sm text-muted-foreground">
                  Stunning visuals with content available in 4K, Ultra HD and
                  HDR.
                </p>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg border bg-background p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <svg viewBox="0 0 24 24" className="h-12 w-12 fill-current">
                <path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409 0-.831.683-1.305 1.901-1.305 2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0 9.667 0 7.589.654 6.104 1.872 4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219 2.585.92 3.445 1.574 3.445 2.583 0 .98-.84 1.545-2.354 1.545-1.875 0-4.965-.921-6.99-2.109l-.9 5.555C5.175 22.99 8.385 24 11.714 24c2.641 0 4.843-.624 6.328-1.813 1.664-1.305 2.525-3.236 2.525-5.732 0-4.128-2.524-5.851-6.594-7.305h.003z" />
              </svg>
              <div className="space-y-2">
                <h3 className="font-bold">Free</h3>
                <p className="text-sm text-muted-foreground">
                  Everything is free, no subscription or credit card required.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="mx-auto text-center md:max-w-[58rem]"> */}
        {/*   <p className="leading-normal text-muted-foreground sm:text-lg sm:leading-7"> */}
        {/*     Taxonomy also includes a blog and a full-featured documentation site */}
        {/*   </p> */}
        {/* </div> */}
      </section>
    </>
  );
}
