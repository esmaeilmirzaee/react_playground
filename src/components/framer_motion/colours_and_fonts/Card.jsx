import React, { StyleSheet } from 'react'

export default function Card() {
  return (
    <>
      <div className='py-5 x'>
        {/* horizontal line */}
        <div>
          <div className='w-96 h-1 ml-20 mb-5 bg-gray-700  rounded-lg '></div>
        </div>

        {/* title */}
        <div>
          <h1 className='text-3xl'>Heading</h1>
        </div>

        {/* Content */}
        <div>
          <p className='text-xl'>
            An exposed concrete frame supports this 4.2-metre-wide skinny house in Melbourne designed by Oliver du Puy Architects to feature meditation spaces.</p>
          <p className='text-xl'>
            Aptly named Skinny House, the project carves out a quiet, contemplative space on the site of a neglected yard of a 19th-century shop. Oliver du Puy Architects, which is based in Melbourne, built it as a home for a London-based client who is a keen meditator who frequently travels to and from Australia.
          </p>
        </div>

      </div>
    </>
  )
}