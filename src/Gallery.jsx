import data from './data.json';
import { useState } from 'react';
import SelectedBeast from './components/SelectedBeast.jsx'
import HornedBeast from './components/HornedBeast.jsx'
import SearchBeast from './components/Filter.jsx'


function Gallery() {
  const [active, setActive] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [filterInput, setFilterInput] = useState("");
  const [animals, setAnimals] = useState(data);
  const [hornList, setHornList] = useState([])
  
  // setHornList();
  if (!hornList.length > 0){
    let a = [... new Set(data.map(x => x.horns))];

    setHornList(a)
  }

  function handleClick(x) {
    setActive(x)
    setShowModal(!showModal)
  }


  const handleSearch = (e) => {
    e.preventDefault()

    if (searchInput.length > 0 || filterInput > 0) {
      setAnimals([...data].filter((beast) => {
         
        let re = searchInput.length ? new RegExp(String.raw`${searchInput}`, 'i') : '';
        
        if(searchInput.length && filterInput > 0){
          return beast.title.toLowerCase().match(re) && beast.horns == filterInput;
        } else if(searchInput.length) {
          return beast.title.toLowerCase().match(re)
        } else {
          return beast.horns == filterInput
        }
      }))
    }


  }

  
  return (
    <>
    <div className="gallery">

      <SearchBeast hornList={hornList} searchInput={searchInput} setFilterInput={setFilterInput} setSearchInput={setSearchInput} handleSearch={handleSearch}/>
      <SelectedBeast data={active} showModal={showModal} handleClose={() => setShowModal(false)} />
      <div className="beast-list">
      {
        animals.map(x =>{
          return  <HornedBeast key={x.key} value={x} onImgClick={() => handleClick(x)}/>
        })
      }
      </div>
      </div>
    </>
  )
}

export default Gallery