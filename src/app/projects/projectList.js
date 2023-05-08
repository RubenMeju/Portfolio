import imgTetris from '../../../public/projectsImages/tetris.webp'
import imgMovies from '../../../public/projectsImages/moviesAPI.webp'
import imgPortfolio from '../../../public/projectsImages/portfolio.webp'

import imagen from '../../../public/SonGoku.webp'

export const projects = [
  {
    path: 'tetris',
    title: 'Tetris',
    subTitle: 'El juego de tetris',
    image: imgTetris,
    description:
      'El clásico juego de tetris. Se puede jugar con las flechas del teclado o con los botones de la pantalla.',
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
      ' API de peliculas y series con la posibilidad de buscar por populares, mejor valoradas, proximos estrenos, etc... además de poder cambiar el idioma entre inglés y español',
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
      ' Portfolio personal donde muestro mis proyectos y mi información personal.',
    technology: ['React', 'Next', 'HTML', 'CSS', 'Framer motion', 'Vercel'],
    url_vercel: 'https://portfolio-rubenmeju.vercel.app/',
    url_github: 'https://github.com/RubenMeju/Portfolio'
  },
  {
    title: 'Project 4',
    description: 'This is a project',
    image: imagen,
    link: 'https://www.google.com'
  },
  {
    title: 'Project 5',
    description: 'This is a project',
    image: imagen,
    link: 'https://www.google.com'
  },
  {
    title: 'Project 6',
    description: 'This is a project',
    image: imagen,
    link: 'https://www.google.com'
  },
  {
    title: 'Tetris',
    description: 'El juego de tetris',
    image: imgTetris,
    link: 'https://tetris-redux-toolkit.vercel.app/'
  },
  {
    title: 'Movies API',
    description: 'API de peliculas',
    image: imgMovies,
    link: 'https://movies-api-tmdb.vercel.app/'
  },
  {
    title: 'Project 9',
    description: 'This is a project',
    image: imagen,
    link: 'https://www.google.com'
  }
]
