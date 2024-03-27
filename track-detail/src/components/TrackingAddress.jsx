import React from 'react'

const TrackingAddress = () => {
  return (
    <>
    <div className='container w-screen relative m-auto drop-shadow-2xl shadow-lg md:w-12/12'>
      <div className='w-11/12 h-80 ml-2 md:w-full'>
        <div className='w-80 h-20 md:w-full'>
        <h3 className='text-xl leading-7 font-medium'>Ikeja, Lagos State</h3>
        <h3 className='text-md leading-7 font-medium'>Tracking number - <span className='font-bold'>#AHF238Q</span></h3>
      </div>
      <div className='bg-deepBlack w-48 h-8 float-right mt-4 mr-2 md:h-10 md:w-60'>
        <h2 className='text-sm leading-7 text-center text-whiteWhite font-medium md:text-lg'>Total Charge - <span className='font-bold md:text-lg'>N101,250.00</span></h2>
      </div>
      <div className='mt-24 w-11/12 h-24 md:w-full'>
        <h3 className='text-md leading-7 text-blackBlack font-medium'>Asaba, Delta State</h3>
        <p className='text-sm leading text-blackBlack font-medium mt-2'>No 4A Bonsac street, off Benin-Onitsha express road, Asaba.</p>
      </div>
      </div>
    </div>
    </>
  )
}

export default TrackingAddress
