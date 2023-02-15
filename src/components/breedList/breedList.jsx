import { Link } from 'react-router-dom'

const BreedList = ({breedList}) => {
  console.log(breedList)
  return (
    <div className="dogs">
      Breed list here
      {Object.keys(breedList).map((key, index) => (
        <div className="breed" key={index}>
          {breedList[key].length > 0 ? (
            <p>{key}</p>
          ) : (
            <p>{key}</p>
          )}
          {/* <Link to={"/"}> *
            <p>{breed}<p>
          {/* </Link> */}
        </div>
      ))}
    </div>
  )
}

export default BreedList;
