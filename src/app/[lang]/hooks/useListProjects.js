import imgTetris from '../../../../public/projectsImages/tetris.webp'
import imgMovies from '../../../../public/projectsImages/moviesAPI.webp'
import imgPortfolio from '../../../../public/projectsImages/portfolio.webp'
import { getDictionary } from '../../../get-dictionary'

export async function useListProjects(lang) {
  console.log('useListProjects', lang)
  const dictionary = await getDictionary(lang)

  const projects = [
    {
      path: 'tetris',
      title: dictionary['listProjects'].titleTetris,
      subTitle: dictionary['listProjects'].subTitleTetris,
      image: imgTetris,
      description: dictionary['listProjects'].descriptionTetris,
      technology: ['Vite', 'React', 'Redux Toolkit', 'HTML', 'CSS', 'Vercel'],
      url_vercel: 'https://tetris-redux-toolkit.vercel.app/',
      url_github: 'https://github.com/RubenMeju/TetrisReduxToolkit'
    },
    {
      path: 'movies-api',
      title: dictionary['listProjects'].titleMoviesAPI,
      subTitle: dictionary['listProjects'].subTitleMoviesAPI,
      image: imgMovies,
      description: dictionary['listProjects'].descriptionMoviesAPI,
      technology: ['Vite', 'React', 'HTML', 'Tailwind CSS', 'Vercel'],
      url_vercel: 'https://movies-api-tmdb.vercel.app/',
      url_github: 'https://github.com/RubenMeju/Movies_API_TMDB'
    },
    {
      path: 'portfolio',
      title: dictionary['listProjects'].titlePortfolio,
      subTitle: dictionary['listProjects'].subTitlePortfolio,
      image: imgPortfolio,
      description: dictionary['listProjects'].descriptionPortfolio,
      technology: ['React', 'Next', 'HTML', 'CSS', 'Framer motion', 'Vercel'],
      url_vercel: 'https://portfolio-rubenmeju.vercel.app/',
      url_github: 'https://github.com/RubenMeju/Portfolio'
    }
  ]
  return { projects }
}
