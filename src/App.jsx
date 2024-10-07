import { useState } from 'react'
import Header from './Header.jsx'
import Gallery from './Gallery.jsx'
import Footer from './Footer.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <div>
          <Header />
          <Gallery />
          <Footer />
       </div>
    </>
  )
}

export default App
