import React from 'react'
import { FaCarAlt} from 'react-icons/fa'

const TrackingRoute = () => {
  return (
    <div className='w-full'>
        <div>
            <h2 className='font-bold text-xl text-blackDark ml-3'>Tracking Details</h2>
        </div>
        <div className="">
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
        </div>
    </div>
  )
}

export default TrackingRoute
