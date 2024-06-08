# MovieWeb Kickstart Project

A launching point for building a movie streaming website.

## Features

- **Browse Movies**: Explore a vast collection of movies sorted by genre, release date, or popularity.
- **Search Functionality**: Easily find movies by title, director, or cast.
- **User Reviews**: Read and write reviews to share your thoughts and opinions about movies.
- **User Ratings**: Rate movies and see the average ratings provided by the community.
- **Recommendation Engine**: Get personalized movie recommendations based on your preferences and viewing history.
- **Responsive Design**: Enjoy a seamless experience across devices with our responsive web design.

## Deployments
### Deploy with Vercel
1. Click the button below to deploy the project on Vercel.

- [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fbitfreee%2Fmovie-web-kickstart&env=NEXT_PUBLIC_APP_URL,NEXT_PUBLIC_TMDB_TOKEN,NEXT_PUBLIC_SITE_NAME) 
2. Fill in the required environment variables:
- `NEXT_PUBLIC_APP_URL`: The URL of your deployed project (e.g., `https://movie-web-kickstart.vercel.app`)
- `NEXT_PUBLIC_TMDB_TOKEN`: Your TMDb API key (get it [here](https://www.themoviedb.org/documentation/api), or you can use default token in .env.example file for testing)
- `NEXT_PUBLIC_SITE_NAME`: The name of your website (e.g., `MovieWeb Kickstart`)

3. Click "Deploy" and wait for the deployment to complete.

### Deploy with Cloudflare Pages
To deploy on [Cloudflare Pages](https://pages.cloudflare.com/) you can use the following instructions:
[README](https://github.com/cloudflare/next-on-pages/tree/main/packages/next-on-pages)

## Local Development

1. Clone the repository: `git clone https://github.com/bitfreee/movie-web-kickstart`
2. Navigate to the project directory: `cd movie-web-kickstart`
3. Install dependencies: `npm install`
4. Create .env file `cp .env.example .env`
4. Start the development server: `npm run dev`

## Tech Stack

- [Next.js](https://nextjs.org/) – framework
- [TypeScript](https://www.typescriptlang.org/) – language
- [Tailwind](https://tailwindcss.com/) – CSS
- [Vercel](https://vercel.com/) – deployments
- [TMDb](https://www.themoviedb.org/) - movie database
- [Vidsrc.cc](https://vidsrc.cc) - streaming links

## Contributing

Contributions are welcome! If you'd like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/improvement`).
3. Make your changes.
4. Commit your changes (`git commit -am 'Add new feature'`).
5. Push to the branch (`git push origin feature/improvement`).
6. Create a new Pull Request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

- The Movie Database (TMDb) for providing the movie data through their API.
- [Vidsrc.cc](https://vidsrc.cc) for providing the movie streaming links.
---

