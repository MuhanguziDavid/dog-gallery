import React, { useState } from 'react';
import CustomModal from '../modal/customModal'

const DogsGallery = ({dogs}) => {
  const [show, setShow] = useState(false)
  const [currentImage, setCurrentImage] = useState('')

  const handleShow = (dog) => {
    setShow(true)
    setCurrentImage(dog)
  }

  const handleClose = () => setShow(false)

  return (
    <>
      <div className="dog-gallery">
        {dogs.map((dog, index) => (
          <div className="dog-picture" key={index} onClick={() => handleShow(dog)} >
            <img src={dog} alt={index}/>
          </div>
        ))}
      </div>

      <CustomModal show={show} currentImage={currentImage} handleClose={handleClose} />
    </>
  )
}

export default DogsGallery;
