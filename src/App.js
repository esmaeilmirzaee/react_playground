import ImageSlider from './components/slider/ImageSlider'
import { ImageData } from './components/slider/ImageData'

import CardScreen from './components/framer_motion/CardScreen'

function App() {
  return (
    <>
      <div className="my-10">
        <ImageSlider slides={ImageData} />
      </div>
      <CardScreen />
    </>
  );
}

export default App;
