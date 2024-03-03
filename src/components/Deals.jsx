import React from 'react'
import DealCard from './DealCard'

const Deals = () => {
    return (
        <div className='mx-36 px-36'>
            <h1 className='text-slate-700 text-3xl my-3'>Related deals you might like for</h1>
        <div className="flex justify-around mt-6 gap-x-2">
          <DealCard />
          <DealCard />
          <DealCard />
        </div>
      </div>
    );
}

export default Deals