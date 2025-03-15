
import './App.css'
import Cover from './Components/Cover/Cover'
import Header from './Components/Header/Header'
import Text from './Components/Text/Text'
import Blogs from './Components/Blogs/Blogs'
import Cook from './Components/Cook/Cook'
import About from './Components/About/About'
import Footer from './Components/Footer/Footer'
import { useState } from 'react'

function App() {
  const [cook, setCook] = useState([])

  const handleCook = recipeItam =>{
    const newCook = [...cook,recipeItam]
    setCook(newCook)
  }

  return (
    <>
      
      <Header></Header>
      <Cover></Cover>
      
      <Text></Text>
      <div className='md:flex m-5'>
        <Blogs handleCook={handleCook}></Blogs>
        <Cook cook={cook}></Cook>
      </div>
      <About></About>
      <Footer></Footer>
      
      
    </>
  )
}

export default App
