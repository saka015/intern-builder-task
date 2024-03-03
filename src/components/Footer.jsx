import React from 'react'

const Footer = () => {
  return (
    <div className='flex justify-around bg-slate-900 p-10 text-gray-300 mt-16'>
    
        <div>
            <h1 className='my-2'>CATEGORIES</h1>
              <ul className='text-sm my-2 gap-3'>
                  <li>Web Builder</li>
                  <li>Hosting</li>
                  <li>Data Center</li>
                  <li>Robotic-Automation</li>
            </ul>
    </div>
        <div>
            <h1 className='my-2'>CONTACT</h1>
              <ul className='text-sm my-2 gap-3'>
                  <li>Contact</li>
                  <li>Privacy Policy</li>
                  <li>Terms of Service</li>
                  <li>Categories</li>
                  <li>About</li>
            </ul>
          </div>
          <div>
              <p className='mt-16'>United States</p>
          </div>
        
    </div>
  )
}

export default Footer