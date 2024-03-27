import React from 'react'
import { FaCarAlt} from 'react-icons/fa'

const TrackingRoute = () => {
  return (
    <div className='w-full mt-3 md:w-full'>
        <div>
            <h2 className='font-bold text-lg text-blackDark ml-3 mb-6 leading-7 text-blackBlack md:text-xl'>Tracking Details</h2>
        </div>
        {/* <div className="">
            <div className="row">
				<div className="col-12 col-md-10 hh-grayBox pt45 pb20">
					<div className="row justify-content-between">
						<div className="order-tracking completed">
							<span className="is-complete"></span>
							<p>In Process to reciever's ciity<br/></p>
                            <div className='flex jusify-between items-center'>
                            <p>No 4A Bonsac Street, off Benin-Onithsa express road, Asaba</p>
                            <p>26 - 02 - 24</p>
                            </div>
						</div>
						<div className="order-tracking completed">
							<span className="is-complete"></span>
							<p>Transit from sender's ciity<br/></p>
                            <div className='flex jusify-between items-center'>
                            <p>No 4A Bonsac Street, off Benin-Onithsa express road, Asaba</p>
                            <p>26 - 02 - 24</p>
                            </div>
						</div>
						<div className="order-tracking">
							<span className="is-complete"></span>
							<p>Sent from ikorodu<br/></p>
                            <div className='flex jusify-between items-center'>
                            <p>No 4A Bonsac Street, off Benin-Onithsa express road, Asaba</p>
                            <p>26 - 02 - 24</p>
                            </div>			
                        </div>
					</div>
				</div>
			</div>
        </div> */}

<ol className="relative text-gray-500 border-s border-gray-200 dark:border-gray-700 dark:text-gray-400 ml-6">                  
    <li class="mb-10 ms-6">            
        <span className="absolute flex items-center justify-center w-10 h-10 bg-green-200 rounded-full -start-4 ring-0 ring-white dark:ring-gray-900 dark:bg-deepBlue">
            {/* <svg className="w-3.5 h-3.5 text-green-500 dark:text-green-400" aria-hidden="true" xmlns="http://w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
            </svg> */}
             <img src='src\assets\Group.png' alt='' />
        </span>
        <h3 className="font-medium leading-tight text-blackBlack ml-3">In Process to receiver's ciity</h3>
        <div className='flex justify-between'>
        <p class="text-sm ml-3 text-lightGreen">No 4A Bonsac Street,<br></br> Off Benin-Onitsha express road, Asaba</p>
        <span className='text-sm text-lightGreen'>26-02-24</span>
        </div>
    </li>
    <li className="mb-10 ms-6">
        <span className="absolute flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full -start-4 ring-0 ring-white dark:ring-gray-900 dark:bg-deepGray">
            {/* <svg className="w-3.5 h-3.5 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                <path d="M18 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2ZM6.5 3a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3.014 13.021l.157-.625A3.427 3.427 0 0 1 6.5 9.571a3.426 3.426 0 0 1 3.322 2.805l.159.622-6.967.023ZM16 12h-3a1 1 0 0 1 0-2h3a1 1 0 0 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Z"/>
            </svg> */}
             <img src='src\assets\Vector.png' alt='' className='text-white-500' />
        </span>
        <h3 className="font-medium leading-tight text-blackBlack ml-3">Transit from sender's ciity</h3>
        <div className='flex justify-between'>
        <p className="text-sm ml-3 text-lightGreen">Ikeja Lagos</p>
        <span className='text-sm text-lightGreen'>22-02-24</span>
        </div>
    </li>
    <li className="mb-10 ms-6">
        <span className="absolute flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full -start-4 ring-0 ring-white dark:ring-gray-900 dark:bg-deepGray">
            {/* <svg className="w-3.5 h-3.5 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z"/>
            </svg> */}
             <img src='src\assets\solar_delivery-bold-duotone.png' alt='' className='text-white-400' />
        </span>
        <h3 className="font-medium leading-tight ml-3 text-blackBlack">Sent From Ikorodu</h3>
        <div className='flex justify-between'>
        <p className="text-sm ml-3 text-lightGreen">No 13 Babajide close, Ikorodu Lagos</p>
        <span className='text-sm text-lightGreen'>15-02-24</span>
    </div>
    </li>
    {/* <li className="ms-6">
        <span className="absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -start-4 ring-4 ring-white dark:ring-gray-900 dark:bg-gray-700">
            <svg className="w-3.5 h-3.5 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2ZM7 2h4v3H7V2Zm5.7 8.289-3.975 3.857a1 1 0 0 1-1.393 0L5.3 12.182a1.002 1.002 0 1 1 1.4-1.436l1.328 1.289 3.28-3.181a1 1 0 1 1 1.392 1.435Z"/>
            </svg>
            <img src='src\assets\vectorlast.png' alt='' />
        </span>
        <h3 className="font-medium leading-tight">Confirmation</h3>
        <p className="text-sm">Step details here</p>
    </li> */}
</ol>
    </div>
  )
}

export default TrackingRoute
