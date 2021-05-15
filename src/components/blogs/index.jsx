import { Link, Switch, Route, useRouteMatch } from 'react-router-dom';
import FirstPost from './contents/FirstPost'
import AnotherPost from './contents/AnotherPost'

// Hooks - useReducer to show posts
import Posts from '../hooks/Posts'

export default function Blogs() {
  const { path, url } = useRouteMatch();
  console.log(path, url)
  return (
    <>
      {/* Cursor */}
      <p className='text-indigo-600 text-4xl text-center mb-5'>Carousel place holder full screen</p>
      {/* Posts */}
      {/* Navbar Posts */}

      <ul className='items-center bg-red-400 px-4 py-2 text-white text-center font-light'>
        <li className='inline-block px-3 py-1 mx-2 bg-white text-red-500 hover:bg-gray-50'>
          <Link to={`${url}/first_post`}>First Post</Link>
        </li>
        <li className='inline-block px-3 py-1 mx-2 bg-white text-red-500 hover:bg-gray-50'>
          <Link to={`${url}/second_post`}>Another Post</Link>
        </li>
      </ul>


      {/* Switch */}
      <Switch>
        <Route path={`${path}/first_post`}>
          <Posts />
        </Route>
        <Route path={`${path}/second_post`}>
          <AnotherPost />
        </Route>
      </Switch>
    </>
  )
}