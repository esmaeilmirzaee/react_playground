import { BrowserRouter as Link } from 'react-router-dom'
export default function Header() {
  return (
    <>
      <div className='flex items-center bg-indigo-700 w-screen h-full mb-4 justify-between'>
        {/* brand/logo */}
        <div className='flex items-center mx-2 py-1'>
          <img className='rounded-full shadow-2xl' src='https://esmaeilmirzaee.herokuapp.com/static/img/my__avatar.svg' width='64' height='64' />
          <div className='mx-2'>
            <p className='text-lg text-white font-bold'>Esmaeil MIRZAEE</p>
            <p className='text-sm text-white font-light'>React Playground</p>
          </div>
        </div>
        {/* nav items */}
        <div>
          <ul className='flex'>
            <a href='/carousel'>
              <li className='text-white mx-2 hover:border-b-2 hover:border-white hover:text-indigo-50 hover:scale-110 cursor-pointer'>
                Carousel
            </li>
            </a>
            <a href='/fm'>
              <li className='text-white mx-2 hover:border-b-2 hover:border-white hover:text-indigo-50 hover:scale-110 cursor-pointer'>Framer Motion</li>
            </a>
          </ul>

        </div>
        {/* buttons */}
        <div></div>
      </div>
    </>
  )
}