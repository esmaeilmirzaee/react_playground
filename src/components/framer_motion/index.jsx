import { Switch, Route, Link, useRouteMatch } from 'react-router-dom'
import ColourCard from './colours_and_fonts/index'
import CardScreen from './advanced_animations/fade/CardScreen'

export default function FramerMotionCourse() {
  const { path, url } = useRouteMatch()
  return (
    <>
      <Navbar url={url} />

      <></>
      <Switch>
        <Route path={`${path}/card_screen`}>
          <ColourCard />
        </Route>
        <Route path={`${path}/fade`}>
          <CardScreen />
        </Route>
      </Switch>
    </>
  )
}

const Navbar = ({ url }) => {
  return (
    <nav className=''>
      <div>
        <h1>Framer Motion</h1>
      </div>
      <ul className='flex'>
        <li className='mx-2'>
          <Link to={`${url}/card_screen`}>
            CardScreen
          </Link>

        </li>
        <li className='mx-2'>
          <Link to={`${url}/fade`}>
            Fade
          </Link>
        </li>
      </ul>
    </nav>

  )
}