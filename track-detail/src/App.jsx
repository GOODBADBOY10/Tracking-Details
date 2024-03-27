import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TrackingAddress from './components/TrackingAddress'
import TrackingDetails from './components/TrackingDetails'
import TrackingRoute from './components/TrackingRoute'

function App() {
 
  return (
    <>
      <div className='container w-screen m-auto relative md:flex md:justify-between md:mt-6 md:m-4'>
        <div className=''>
        <TrackingDetails />
        </div>
        <div className=''>
        <TrackingAddress />
         <TrackingRoute />
        </div>
        </div>
    </>
  )
}

export default App
