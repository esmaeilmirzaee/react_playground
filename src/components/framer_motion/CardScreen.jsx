import { useState } from 'react'
import CardItem from './CardItem'
import Fade from './Fade'

export default function CardScreen() {
  const [active, setActive] = useState(false)
  return (
    <div className=''>
      <div className='px-6 py-3 bg-indigo-600 text-white mx-5 rounded-md cursor-pointer w-40 text-center' onClick={() => setActive(!active)}>Toggle</div>
      <div>
        <Fade isActive={active}>
          <CardItem name='{c.name}' content='{c.content}' />
        </Fade>
      </div>
    </div>
  )
}

const cards = [
  { name: "List Item 1", content: 'this is inside the card' },
  { name: "List Item 2", content: 'this is inside the card' },
  { name: "List Item 3", content: 'this is inside the card' },
  { name: "List Item 4", content: 'this is inside the card' },
  { name: "List Item 5", content: 'this is inside the card' },
  { name: "List Item 6", content: 'this is inside the card' },
]