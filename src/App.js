import { motion } from 'framer-motion'
import { useRef,useEffect,useState} from 'react';
import './App.css';
import images from './images'
import img from './assets/10.png'
function App() {
  const [width,setWidth] = useState(0);
  const carouosel = useRef();

  useEffect(() => {
    console.log(carouosel.current.scrollWidth,carouosel.current.offsetWidth)
    setWidth(carouosel.current.scrollWidth - carouosel.current.offsetWidth);
  },[]);


  return (
    
    <div className="App">
      <div className='title'>
      <h1 >Carousel</h1>
      <h2>Swipe Left</h2>
      </div>
      <motion.div ref = {carouosel} className='carousel' whileTap={{cursor:"grabbing"}}>
        <motion.div 
        drag="x" 
        dragConstraints={{ right:0 , left:-width}}
        className='inner-carousel'
        >
          {images.map(image => {
            return (
              <motion.div className='item' key={image}>
                <img src={image} alt=''/>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
      
    </div>
  );
}

export default App;
