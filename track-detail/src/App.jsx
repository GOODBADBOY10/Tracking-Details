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
      {/* <div className='flex items-center justify-between'>
        <TrackingDetails />
        <TrackingAddress />
      </div> */}
      <TrackingRoute />
    </>
  )
}

export default App
