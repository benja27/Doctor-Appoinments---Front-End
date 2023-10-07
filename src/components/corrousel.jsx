import React from 'react'
import Index_item from './index_item'

function Corrousel() {
  return (
    <div className='flex-grow-1' >
      <div className='bg-primary h-100 text-center' >
        <h1 className='text-center' >LATEST MODELS</h1>
        <h4>Please select a Vespa Model</h4>

        <Index_item />


      </div>
    </div>
  )
}

export default Corrousel