import data from './data.json';
import { useState } from 'react';
import SelectedBeast from './components/SelectedBeast.jsx'
import HornedBeast from './components/HornedBeast.jsx'
import Form from 'react-bootstrap/Form';


function Gallery() {
  const [active, setActive] = useState({})
  const [showModal, setShowModal] = useState(false)
  const [searchInput, setSearchInput] = useState("");
  const [filterInput, setFilterInput] = useState("")
  let filteredData = data

  let hornList = [... new Set(data.map(x => x.horns))];

  function handleClick(x) {
    setActive(x)
    setShowModal(!showModal)
  }

  const handleClose = () => setShowModal(false);

  // const handleChange = (e) => {
  //   e.preventDefault();
  //   let s = (e.target.value).toLowerCase()
  //   setSearchInput(s);
  // };



  const handleDropDown = (e) => {
    setFilterInput(e.target.value);
  };

  const handleSearch = (e) => {
    console.log(e)

    e.preventDefault()
    const query = formData.get("query");
    const horns = formData.get('select');
    console.log(`You searched for '${query}'`);

    if (query > 0) {
      filteredData = data.filter((beast) => {
        let n = beast.title.toLowerCase()
        let re = new RegExp(String.raw`${searchInput}`, "i");
        return n.match(re);
      })
    }

    if (horns > 0) {
      filteredData = filteredData.filter((x) => {
        return x == horns
      })
    }
  }


  
  return (
    <>
    <div className="gallery">
      <form action={handleSearch} onSubmit={e => e.preventDefault()}>
              <Form.Select aria-label="Default select example">
                <option>Number of Horns</option>
          
            {
              hornList.map(x => {
                return <option key={x} value={x}>{x}</option>
              })
            }
              </Form.Select>
        <Form.Control type="text" placeholder="Search" name="query" value={searchInput} onChange={e => setSearchInput(e.target.value)} />
        
        
        <button type="submit">Search</button>
      </form>

      
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