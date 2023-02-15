import useFetch from "../../hooks/useFetch"
import DogsGallery from '../../components/dogsGallery/dogsGallery'

const DogsPage = () => {
  const { error, isLoading, data: dogs } = useFetch('https://dog.ceo/api/breeds/image/random/9')

  return (
    <div className="dogs-page">
      { error && <div>{ error }</div> }
      { isLoading && <div>Loading...</div> }
      { dogs && <DogsGallery dogs={dogs}/> }
    </div>
  )
}

export default DogsPage