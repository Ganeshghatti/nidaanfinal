import React from 'react'
import doctor from '../../Assets/doctor.svg'
import arrow from '../../Assets/arrow-up-right.svg'

import './Upcoming.css'

const Upcoming = () => {
    return (
        <div className='upcomingContainer'>
            <img src={doctor} alt="" />
            <div className="upcomingText">
                <p id='upcomingHeading'>Your Health, Our Priority</p>
                <p id='upcomingMain'>Your well-being matters to us. Our upcoming service expansion with real doctors reflects our commitment to delivering quality healthcare, personalized treatment plans, and trustworthy medical advice.</p>
                <a href="" id='comingSoon'>
                    <button className="comingBtn">
                        <p >Coming Soon</p>
                        <img src={arrow} alt="" />
                    </button>
                </a>
            </div>
        </div>
    )
}

export default Upcoming;