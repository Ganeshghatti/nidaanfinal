import React from 'react'
import neoLogo from '../../Assets/neoLogo.png'
import speakToMe from '../../Assets/speakToMe.svg'
import { HashLink } from 'react-router-hash-link'

import './FAQ.css'


const SpeakToNeo = () => {
    return (
        // <div className="speakToNeoContainer">
        <div className="speakToNeoCenter">
            <img src={neoLogo} alt="" className='neoLogo' />

            <div className="neoIntro">
                <h2> I am Neo</h2>
                <p>You're only one click away from a life-changing journey</p>

                <HashLink smooth to='/meetneo#chatBot'>
                    <img src={speakToMe} alt="" />
                </HashLink>


            </div>

        </div>
        // </div>
    )
}
export default SpeakToNeo