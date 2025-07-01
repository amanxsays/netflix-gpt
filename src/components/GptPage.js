import GptMovies from './GptMovies'
import GptSearch from './GptSearch'

const GptPage = () => {
  return (
    <div className='h-[357%] w-full absolute z-10 backdrop-blur-3xl pt-[20vh] items-center'>
        <GptSearch />
    </div>
  )
}

export default GptPage