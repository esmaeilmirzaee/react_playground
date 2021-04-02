import React from 'react'
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/solid'
import { ImageData } from './ImageData'
import './styles.css'

const ImageSlider = ({ slides }) => {
  let [current, setCurrent] = React.useState(0)

  const nextSlide = () => {
    setCurrent(current === slides.length - 1 ? 0 : current + 1)
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? slides.length - 1 : current - 1)
  }

  // Check the provided slides
  if (!Array.isArray(slides) || slides.length <= 0) {
    return null
  }

  return (
    <section className='slider'>
      <button className='left-btn p-2 border-2 border-indigo-500' onClick={prevSlide}>
        <ArrowLeftIcon className='h-5 w-5 text-indigo-500' />
      </button>
      <button className='right-btn p-2 border-2 border-indigo-500' onClick={nextSlide}>
        <ArrowRightIcon className='h-5 w-5 text-indigo-500' />
      </button>
      {ImageData.map((image, index) => {
        return (
          <div className={index === current ? 'slide active' : 'slide'} key={image.id}>
            {index === current &&
              (<img className='image' src={image.image} alt={`#${image.id}`} />)
            }
          </div>
        );
      })}
    </section>
  )
}

export default ImageSlider;

