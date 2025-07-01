import Header from './Header';
import usePopularMovies from '../hooks/usePopularMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import GptPage from './GptPage';
import { useSelector } from 'react-redux';


const Browse = () => {

  const showGpt = useSelector((store) => store.gpt.showGptPage);

  usePopularMovies();
  return (
    <div className='text-white bg-black'>
      <Header/>
      {showGpt && <GptPage />}
      <MainContainer/>
      <SecondaryContainer/>
    </div>
  )
}

export default Browse