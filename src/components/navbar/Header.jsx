import { useState, useContext } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'

export default function Header() {
  const [framerMotionDropdownMenu, setFramerMotionDropdownMenu] = useState(false)
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext)
  return (
    <nav>
      <div className='flex items-center bg-indigo-700 w-screen h-full mb-4 justify-between'>
        {/* brand/logo */}
        <Link to='/'>
          <div className='flex items-center mx-2 py-1 cursor-pointer'>
            <img className='rounded-full shadow-2xl' src='https://esmaeilmirzaee.herokuapp.com/static/img/my__avatar.svg' width='64' height='64' />
            <div className='mx-2'>
              <p className='text-lg text-white font-bold'>Esmaeil MIRZAEE</p>
              <p className='text-sm text-white font-light'>React Playground</p>
            </div>
          </div>
        </Link>
        {/* nav items */}
        <div>
          <ul className='flex'>
            <li className='text-white mx-2 hover:border-b-2 hover:border-white hover:text-indigo-50 hover:scale-110 cursor-pointer' onClick={() => setFramerMotionDropdownMenu(false)}>
              <NavLink to='/carousel'>
                Carousel
              </NavLink>
            </li>
            <li className='relative mx-2 text-white hover:border-b-2 hover:border-white hover:text-indigo-50 hover:scale-110 cursor-pointer' onClick={() => setFramerMotionDropdownMenu(!framerMotionDropdownMenu)}>
              <NavLink to='/fm'>
                Framer Motion
              </NavLink>
              {framerMotionDropdownMenu && <ul className='absolute mt-2 w-48 bg-white rounded-md shadow-xl hover:rounded-md'>
                <li className='block px-4 py-2 text-gray-600 hover:bg-indigo-600 hover:rounded-md hover:text-white '>
                  <Link>Fade</Link>
                </li>
                <li className='block px-4 py-2 text-gray-600 hover:bg-indigo-600 hover:rounded-md hover:text-white '>
                  <Link>Fade 1</Link>
                </li>
              </ul>}
            </li>
            <li className='text-white cursor-pointer mx-2' onClick={() => setFramerMotionDropdownMenu(false)}>
              <NavLink to='/blogs' className='active:bg-white active:text-indigo-500'>Blogs</NavLink>
            </li>
          </ul>
        </div>
        {/* buttons */}
        {/* AuthContext usage */}
        {isLoggedIn ?
          <div className='flex items-center'>
            <Link to='/admin'>
              <img className='rounded-full w-10 h-10 mx-2 cursor-pointer ' src='https://images.unsplash.com/photo-1620097064445-1a64d19ff2f5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80' />
            </Link>
            <div className='px-5 py-2 hover:text-white hover:bg-indigo-800 border-2 rounded-full mr-4 bg-white text-indigo-900' onClick={() => setIsLoggedIn(!isLoggedIn)}>
              Sign Out
            </div>
          </div>
          :
          <div className='px-5 py-2 text-white font-bold border-2 rounded-full mr-4 hover:bg-white hover:text-indigo-900' onClick={() => setIsLoggedIn(!isLoggedIn)}>
            Sign In
          </div>
        }
      </div>
    </nav>
  )
}