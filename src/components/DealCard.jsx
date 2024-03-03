import React from 'react'
import pc from "../assets/pc.png";


const DealCard = () => {
  return (
      <div className='bg-white p-3 grid align-center items-center justify-center'>
          <img className='ml-12' src={pc} alt="" />
          <div className='flex gap-x-3 my-2 ml-4'>
              <p className='rounded-md bg-gray-200 p-1 text-blue-600'>20% Off</p>
              <p className='rounded-md bg-gray-200 p-1 text-blue-600'>Limited Time</p>
          </div>
          <h3 className='text-center font-semibold text-gray-600'>Webbuilder 1</h3>
          <p className='font-light text-gray-500'>Computer Modern Clasixc with wix support</p>
          <div className='my-2 flex gap-x-3'>
              <p className='text-lg'>$39.96</p>
              <p className='text-sm mt-2'>$49.96</p>
              <span className='text-sm mt-2 text-red-400'>(20% Off)</span>
          </div>
          <button className='rounded-md w-full py-3 my-2 bg-blue-500 text-white'>View Details</button>
    </div>
  )
}

export default DealCard