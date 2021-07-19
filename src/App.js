import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Layout from './components/navbar/Layout';
import ImageSlider from './components/slider/ImageSlider';
import { ImageData } from './components/slider/ImageData';

import FramerMotionCourse from './components/framer_motion/index';
import Blogs from './components/blogs/index';

// Context
import { AuthContextProvider } from './context/AuthContext';
import Admin from './components/Admin';
import PrivateRoute from './components/PrivateRoute';
import PrivateRouteComponent from './components/PrivateRouteComponent';

// Key bindings
import { useKey } from './hooks/useKey';

import { Charts } from './components/tooltips/index';

function App() {
  const slashHandler = () => {
    console.log('Slash pressed.');
  };
  useKey('Slash', slashHandler);

  return (
    <AuthContextProvider>
      <Router>
        <Layout />
        <div className='flex justify-center align-center'>
          <div className='inline'>
            <button className='px-5 py-2 bg-indigo-100 rounded-md'>
              Start
            </button>
          </div>
          <Charts />
        </div>
        <div style={{ minHeight: '100vh' }}>
          <Switch>
            <Route exact path='/carousel'>
              <div className='my-10'>
                <ImageSlider slides={ImageData} />
              </div>
            </Route>
            <Route path='/fm'>
              <div className='my-5'>
                <FramerMotionCourse />
              </div>
            </Route>
            <Route path='/blogs'>
              <div className='my-5'>
                <Blogs />
              </div>
            </Route>
            {/* Version 2: Using customised components to check authentication */}
            <PrivateRoute path='/admin'>
              <div className='my-5'>
                <Admin />
              </div>
            </PrivateRoute>

            {/* Component property based private route. */}
            <PrivateRouteComponent path='/dashboard' component={Admin} />
          </Switch>
        </div>
      </Router>
    </AuthContextProvider>
  );
}

export default App;
