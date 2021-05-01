import ImageSlider from './components/slider/ImageSlider'
import { ImageData } from './components/slider/ImageData'

import CardScreen from './components/framer_motion/CardScreen'
import FramerMotionCards from './components/framer_motion/colours_and_fonts'
function App() {
  return (
    <div style={{ minHeight: '100vh' }}>
      <div className="my-10">
        <ImageSlider slides={ImageData} />
      </div>
      <CardScreen />

      <div className='my-5'>
        <FramerMotionCards />
      </div>
    </div>
  );
}

export default App;
