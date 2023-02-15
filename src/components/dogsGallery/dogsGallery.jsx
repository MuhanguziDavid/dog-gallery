import { Link } from 'react-router-dom'

const DogsGallery = ({dogs}) => {
  console.log(dogs)
  return (
    <div className="dog-gallery">
      {dogs.map((dog, index) => (
        <div className="dog-picture" key={index}>
          {/* <Link to={"/"}> */}
            <img src={dog} alt={index}/>
          {/* </Link> */}
        </div>
      ))}
    </div>
  )
}

export default DogsGallery;
