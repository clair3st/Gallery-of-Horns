import data from './data.json';
import { useState } from 'react';
import SelectedBeast from "./components/SelectedBeast.jsx"
import HornedBeast from "./components/HornedBeast.jsx"


function Gallery() {
  const [active, setActive] = useState({})
  const [showModal, setShowModal] = useState(false)
  const [searchInput, setSearchInput] = useState("");
  let filteredData = data

  function handleClick(x) {
    setActive(x)
    setShowModal(!showModal)
  }

  const handleClose = () => setShowModal(false);

  const handleChange = (e) => {
    e.preventDefault();
    let s = (e.target.value).toLowerCase()
    setSearchInput(s);
    console.log(s)
  };

  if (searchInput.length > 0) {
      filteredData = data.filter((beast) => {
      let n = beast.title.toLowerCase()
      let re = new RegExp(String.raw`${searchInput}`, "i");
    console.log('searchInput', re, searchInput)
      return n.match(re);
    });
  }

  console.log(filteredData)

  return (
    <>
    <div className="gallery">
      <input
       type="text"
       placeholder="Search here"
       onChange={handleChange}
       value={searchInput} />
      <SelectedBeast data={active} showModal={showModal} handleClose={handleClose} />
      <div className="beast-list">
      {
        filteredData.map(x =>{
          return  <HornedBeast value={x} onImgClick={() => handleClick(x)}/>
        })
      }
      </div>
      </div>
    </>
  )
}

export default Gallery