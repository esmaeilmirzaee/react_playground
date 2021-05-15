import React, { useState } from 'react'
import Card from './Card'

function Button({ title, color = '', onMouseEnter, onMouseOut }) {
  console.log(color)
  return (
    <button onMouseEnter={onMouseEnter} onMouseOut={onMouseOut} className={`inline-block px-4 py-2 my-2 mx-5 shadow-lg border-0 border-gray-50 w-auto rounded-lg ${color ? `${color.text} ${color.bg}` : ''}`}>{title}</button>
  )
}


const FramerMotionCards = () => {
  const [backgroundColour, setBackgroundColour] = useState('')
  const [fontColour, setFontColour] = useState('')

  const setStyle = ({ bg, text }) => {
    console.log('style:', bg, text)
    setBackgroundColour(bg)
    setFontColour(text)
  }


  return (
    <div className='mx-8 px-4 border-2 border-gray-100 rounded-3xl'>
      <div className="">
        <Button title='Cardo' />
        <Button title='Image' />
        <Button title='Import' />
      </div>
      <Card />
      <div className="">
        <button
          title='Blue'
          onMouseEnter={() => console.log({ bg: 'bg-white', text: 'text-indigo-600' })}
          onMouseOut={() => setStyle('bg-indigo-600 text-white')}
        >Blue</button>
        <Button
          title='Yellow'
          onMouseEnter={() => setStyle({ bg: 'bg-yellow-600', text: 'text-white' })}
        />
        <Button
          title='Emerald'
          onMouseEnter={() => setStyle({ bg: 'bg-green-500', text: 'text-white' })}
          onMouseOut={() => setStyle({ bg: 'bg-green-500', text: 'text-white' })}
        />
        <Button
          title='Black'
          color={{ bg: backgroundColour, text: fontColour }}
          onMouseEnter={() => setStyle({ bg: 'bg-gray-800', text: 'text-white' })}
        />
      </div>
    </div>
  )
}

export default FramerMotionCards