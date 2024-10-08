import data from './data.json';

import Favorite from "./components/heart.jsx"



function HornedBeast({ _id, title, image_url, description, keyword, horns}) {


  return (
    <>
    <div className="beast">
      <div className="title-row">
        <h2>{title}</h2>
        <Favorite />
        </div>
      <img 
          alt={title} 
          src={image_url}
          title={title}
        />
      <p>{description}</p>
    </div>
    </>
  )
}


function Gallery() {


  return (
    <>
    <div className="beast-list">
      {
        data.map(x =>{
          return  <HornedBeast {...x}/>
        })
      }
     
      </div>
    </>
  )
}

export default Gallery