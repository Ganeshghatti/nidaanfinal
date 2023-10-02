import React from 'react'
import { HashLink } from 'react-router-hash-link'

import microphone from '../../Assets/disclaimerLogo.svg'
import key from '../../Assets/key.png'
import secure from '../../Assets/secure.png'
import './Disclaimer.css'

const Disclaimer = () => {
    return (
        <div className='disclaimerContainer'>
            <img src={microphone} alt="" className='disclaimerLeft' />
            <div className="disclaimerRight">
                <div className="disclaimer1">
                    <img src={key} alt="" className="disclaimerVector" />
                    <p className="disclaimer">Nidaan AI Health Assistant is not a real doctor, even though it is trained on a vast amount of medical data. Unless reviewed by your local physician, the provided information is for self care and prevention purpose only.</p>

                </div>
                <div className="disclaimer2">
                    <img src={secure} alt="" className="disclaimerVector" />
                    <p className="disclaimer">We strongly recommend not to share any personally identifiable information while using Nidaan AI Health Assistant. Before sharing any information, please ensure all direct identifiers such as your name, address, or social security number are removed.
                        <HashLink smooth to="/meetneo/#chatBot">
                            <span className='disclaimerAction'>
                                Start Journey
                            </span>
                        </HashLink>

                    </p>
                </div>
            </div>
        </div>
    )
}

export default Disclaimer