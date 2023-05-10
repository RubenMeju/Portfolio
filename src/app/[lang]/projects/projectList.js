import imgTetris from '../../../../public/projectsImages/tetris.webp'
import imgMovies from '../../../../public/projectsImages/moviesAPI.webp'
import imgPortfolio from '../../../../public/projectsImages/portfolio.webp'

import imagen from '../../../../public/SonGoku.webp'

export const projects = [
  {
    path: 'tetris',
    title: 'Tetris',
    subTitle: 'El juego de tetris',
    image: imgTetris,
    description:
      'The classic game of Tetris. It can be played using the arrow keys on the keyboard or the buttons on the screen.',
    technology: ['Vite', 'React', 'Redux Toolkit', 'HTML', 'CSS', 'Vercel'],
    url_vercel: 'https://tetris-redux-toolkit.vercel.app/',
    url_github: 'https://github.com/RubenMeju/TetrisReduxToolkit'
  },
  {
    path: 'movies-api',
    title: 'Movies API',
    subTitle: 'API de peliculas',
    image: imgMovies,
    description:
      'Movies and series API with the ability to search by popular, top-rated, upcoming releases, etc., as well as the option to switch between English and Spanish languages.',
    technology: ['Vite', 'React', 'HTML', 'Tailwind CSS', 'Vercel'],
    url_vercel: 'https://movies-api-tmdb.vercel.app/',
    url_github: 'https://github.com/RubenMeju/Movies_API_TMDB'
  },
  {
    path: 'portfolio',
    title: 'Portfolio',
    subTitle: 'Mi portfolio',
    image: imgPortfolio,
    description:
      'Personal portfolio where I showcase my projects and information.',
    technology: ['React', 'Next', 'HTML', 'CSS', 'Framer motion', 'Vercel'],
    url_vercel: 'https://portfolio-rubenmeju.vercel.app/',
    url_github: 'https://github.com/RubenMeju/Portfolio'
  }
]
