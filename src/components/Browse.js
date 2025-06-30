import Header from './Header';
import usePopularMovies from '../hooks/usePopularMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';


const Browse = () => {
  usePopularMovies();
  return (
    <div className='text-white bg-black'>
      <Header/>
      <MainContainer/>
      <SecondaryContainer/>
    </div>
  )
}

export default Browse