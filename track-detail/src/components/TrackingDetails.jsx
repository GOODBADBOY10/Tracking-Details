import React from 'react'

const TrackingDetails = () => {
  return (
    <>
      <div className='w-screen mb-8 relative container m-auto border md:w-60'>
        <div className='py-3'>
          <h2 className='font-bold text-xl text-center'>Track your Order</h2>
        </div>
        <div className='border m-4 drop-shadow-2xl shadow-lg'>
        <div className='border p-2'>
          <h3 className='font-medium text-lg text-center'>Currently Tracking: #AHF238Q</h3>
        </div>
        <div className='p-2'>
          <p className='text-md leading-6'>Stay up to date with the status of your order with tracking number: #AHF238Q</p>
          <p className='text-md leading-6 mt-2'><button className='text-sm font-medium text-deepGray'>CLICK HERE</button> to track another order</p>
        </div>
        </div>
      </div>
    </>
  )
}

export default TrackingDetails
