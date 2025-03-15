
import './App.css'
import Cover from './Components/Cover/Cover'
import Header from './Components/Header/Header'
import Text from './Components/Text/Text'
import Blogs from './Components/Blogs/Blogs'
import Cook from './Components/Cook/Cook'
import About from './Components/About/About'

function App() {
  

  return (
    <>
      
      <Header></Header>
      <Cover></Cover>
      
      <Text></Text>
      <div className='md:flex m-5'>
        <Blogs></Blogs>
        <Cook></Cook>
      </div>
      <About></About>
      
      
    </>
  )
}

export default App
