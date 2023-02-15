import useFetch from "../../hooks/useFetch"
import DogsGallery from '../../components/dogsGallery/dogsGallery'
import BreedList from '../../components/breedList/breedList'

const DogsPage = () => {
  const { error: galleryError, isLoading: isLoadingGallery, data: dogs } = useFetch('https://dog.ceo/api/breeds/image/random/20')
  const { error: breedListError, isLoading: isLoadingBreedList, data: breedList } = useFetch('https://dog.ceo/api/breeds/list/all')

  return (
    <div className="dogs-page">
      { (galleryError || breedListError) && <div>{ galleryError || breedListError }</div> }
      { (isLoadingGallery || isLoadingBreedList) && <div>Loading...</div> }
      { breedList && <BreedList breedList={breedList}/> }
      { dogs && <DogsGallery dogs={dogs}/> }
    </div>
  )
}

export default DogsPage