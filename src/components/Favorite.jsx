import { useState } from 'react';

function Favorite() {
  const [active, setActive] = useState(false)
  const [fav, setFav] = useState(0)

  function handleClick() {
    if(fav == 0){
      setActive(!active);

    }
    setFav(fav + 1);
  }

  return (
    <div >
      <span className={"favorite " + (active ? 'active': '')} onClick={handleClick}>{fav}</span>
    </div>
  );
}

export default Favorite