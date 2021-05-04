import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Layout from './components/navbar/Layout'
import ImageSlider from './components/slider/ImageSlider'
import { ImageData } from './components/slider/ImageData'

import FramerMotionCourse from './components/framer_motion/index'

function App() {
  return (
    <Router>
      <Layout />
      <div style={{ minHeight: '100vh' }}>
        <Switch>
          <Route exact path='/carousel'>
            <div className="my-10">
              <ImageSlider slides={ImageData} />
            </div>
          </Route>
          <Route path='/fm'>
            <div className='my-5'>
              <FramerMotionCourse />
            </div>
          </Route>
        </Switch>
      </div>

    </Router>

  );
}

export default App;
