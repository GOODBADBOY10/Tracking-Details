import React from 'react'

const TrackingAddress = () => {
  return (
    <>
    <div className='w-11/12 h-96 border drop-shadow-2xl ml-4 p-4 shadow-lg'>
      <div className='w-11/12 h-80 border'>
        <div className='w-80 h-20 border'>
        <h3 className='text-2xl leading-7 font-medium'>Ikeja Lagos State</h3>
        <h3 className='text-xl leading-7 font-medium'>Tracking number - <span className='font-bold'>#AHF238Q</span></h3>
      </div>
      <div className='bg-deepBlack w-72 h-10 float-right mr-2'>
        <h2 className='text-xl leading-7 text-center text-whiteWhite font-medium'>Total Charge - <span>#101,250.00</span></h2>
      </div>
      <div className='mt-24 w-9/12 border h-24'>
        <h3 className='text-xl leading-7 text-blackBlack font-medium'>Asaba, Delta State</h3>
        <p className='text-xl leading-7 text-blackBlack font-medium'>No 4A Bonsac street, off Benin-Onitsha express road, Asaba</p>
      </div>
      </div>
    </div>
    </>
  )
}

export default TrackingAddress
