import data from './data.json';
import { useState } from 'react';
import Favorite from "./components/Favorite.jsx"
import SelectedBeast from "./components/SelectedBeast.jsx"
import HornedBeast from "./components/HornedBeast.jsx"




function Gallery() {
  const [active, setActive] = useState({})
  const [showModal, setShowModal] = useState(false)

  function handleClick(x) {
    setActive(x)
    setShowModal(!showModal)
  }

  const handleClose = () => setShowModal(false);

  return (
    <>
    <div className="beast-list">
      <SelectedBeast data={active} showModal={showModal} handleClose={handleClose} />
      {
        data.map(x =>{
          return  <HornedBeast value={x} onImgClick={() => handleClick(x)}/>
        })
      }
     
      </div>
    </>
  )
}

export default Gallery