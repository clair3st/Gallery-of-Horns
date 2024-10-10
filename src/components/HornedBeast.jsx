
import Favorite from "./Favorite.jsx"

function HornedBeast({value, onImgClick}) {

  return (
    <>
    <div className="beast">
      <div className="title-row">
        <h2>{value.title}</h2>
        <Favorite />
        </div>
      <img 
          alt={value.title} 
          src={value.image_url}
          title={value.title}
          onClick={onImgClick}
        />
      <p>{value.description}</p>
    </div>
    </>
  )
}

export default HornedBeast