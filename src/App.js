import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Layout from './components/navbar/Layout'
import ImageSlider from './components/slider/ImageSlider'
import { ImageData } from './components/slider/ImageData'


import CardScreen from './components/framer_motion/advanced_animations/fade/CardScreen'
import FramerMotionCards from './components/framer_motion/colours_and_fonts'



function App() {
  return (
    <Router>
      <Layout>
        <div style={{ minHeight: '100vh' }}>
          <Switch>
            <Route exact path='/'>
              <div className="my-10">
                <ImageSlider slides={ImageData} />
              </div>
            </Route>
            <Route path='/carousel'>
              <CardScreen />
            </Route>
            <Route path='/fm'>
              <div className='my-5'>
                <FramerMotionCards />
              </div>
            </Route>
          </Switch>
        </div>
      </Layout>
    </Router>

  );
}

export default App;
