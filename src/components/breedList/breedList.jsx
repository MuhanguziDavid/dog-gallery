import { Link, useNavigate } from 'react-router-dom'
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';

const BreedList = ({breedList}) => {
  const navigate = useNavigate()

  const handleClick = (breed, subBreed) => {
    subBreed ? navigate(`/breed/${breed}/${subBreed}`) : navigate(`/breed/${breed}`)
  }

  return (
    <div className="breed-list">
      <h2>{breedList && Object.keys(breedList).length === 1 ? 'Breed' : 'Breeds'}</h2>
      {breedList && Object.keys(breedList).map((key, index) => (
        <div className="breed" data-testid={`breed-item-${index}`} key={index}>
          {breedList[key].length > 0 ? (
            <Dropdown className="dropdown-group" as={ButtonGroup}>
              <div className="button-as-link" onClick={() => handleClick(key, null)}>{key}</div>
        
              <Dropdown.Toggle split variant="link" id="dropdown-split-basic" className="dropdown-toggle-as-link" />
        
              <Dropdown.Menu>
                {breedList[key].map((subBreed, index) => (
                  <Dropdown.Item key={index}>
                    <div className="button-as-link" onClick={() => handleClick(key, subBreed)}>{subBreed}</div>
                  </Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          ) : (
            <Link className="link-as-link" to={`/breed/${key}`}>{key}</Link>
          )}
        </div>
      ))}
    </div>
  )
}

export default BreedList;
