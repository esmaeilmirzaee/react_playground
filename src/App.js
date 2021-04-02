import ImageSlider from './components/slider/ImageSlider'
import { ImageData } from './components/slider/ImageData'

function App() {
  return (
    <div className="my-10">
      <ImageSlider slides={ImageData} />
    </div>
  );
}

export default App;
