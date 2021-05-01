import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'

export default function Header() {
  const [framerMotionDropdownMenu, setFramerMotionDropdownMenu] = useState(false)
  return (
    <nav>
      <div className='flex items-center bg-indigo-700 w-screen h-full mb-4 justify-between'>
        {/* brand/logo */}
        <a href='/'>
          <div className='flex items-center mx-2 py-1 cursor-pointer'>
            <img className='rounded-full shadow-2xl' src='https://esmaeilmirzaee.herokuapp.com/static/img/my__avatar.svg' width='64' height='64' />
            <div className='mx-2'>
              <p className='text-lg text-white font-bold'>Esmaeil MIRZAEE</p>
              <p className='text-sm text-white font-light'>React Playground</p>
            </div>
          </div>
        </a>
        {/* nav items */}
        <div>
          <ul className='flex'>
            <li className='text-white mx-2 hover:border-b-2 hover:border-white hover:text-indigo-50 hover:scale-110 cursor-pointer'>
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
          </ul>

        </div>
        {/* buttons */}
        <div></div>
      </div>
    </nav>
  )
}