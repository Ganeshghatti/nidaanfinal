import React from 'react'
import { HashLink } from 'react-router-hash-link'
import robot from '../../Assets/robot.svg'
import guru from '../../Assets/guru.svg'
import arrow from '../../Assets/arrow.svg'
import arrowM from '../../Assets/arrowMobile.svg'
import speakToNeo from '../../Assets/speakToNeo.svg'
import watchDemo from '../../Assets/watchDemo.svg'
import joinedPeople from '../../Assets/joinedPeopleDoodle.svg'
import twitter from '../../Assets/twitter.png'
import instagram from '../../Assets/instagram.png'
import youtube from '../../Assets/youtube.png'
import linkedIn from '../../Assets/linkedin.png'
import toyota from '../../Assets/toyotaLogo.png'
import mcD from '../../Assets/mcDLogo.png'

import iic from '../../Assets/IIC.jpg'
import bit from '../../Assets/bit logo.png'
import techavatar from '../../Assets/techavatar.png'
import leo from '../../Assets/leo.webp'
import degree from '../../Assets/180deg.webp'
import unesquo from '../../Assets/unesquo.webp'
import dristi from '../../Assets/dristi.jpg'

import './Intro.css'


const OldCustomers = () => {

    // yahan pr motion lgana h aur ek naya component bna k us m sare customers k data/logo ko bhejna h aur wahan pr hi render krna h
    return (

        <div className='oldCustomersContainer'>
            <h5>Trusted by 15+ companies</h5>

            <div className="customersLogo">
                <img src={bit} alt="" />
                <img src={iic} alt="" />
                <img src={techavatar} alt="" />
                <img src={dristi} alt="" />
                <img src={degree} alt="" />
                <img src={leo} alt="" />
                <img src={unesquo} alt="" />
            </div>
        </div>
    )
}

const Intro = () => {
    return (
        <>
            <div className="introContainer" id='homeTop'>

                <div className="introArea">
                    <div className="introText">
                        <span className='neo'>Neo</span>
                        <p>Your Advanced Health Guru <img src={guru} alt="guru" /> Ask Anything Know Everything!</p>
                    </div>
                    <div className="introActions">
                        <img src={arrow} alt="arrow" className="arrow" />
                        <img src={arrowM} alt="arrow" className="arrowM" />
                        <div className="introText2">
                            <p className="lightText">
                                Experience the convenience, speed, and reliability of medical information right at your fingertips
                            </p>

                            <div className="introActionContainer">
                                <HashLink smooth to="/#chatBot" className='introActions'>
                                    <img src={speakToNeo} alt="" className='introActionImg' />
                                </HashLink>
                                {/* <a href="" className='introActions'> */}
                                    <img src={watchDemo} alt="" className='introActionImg' />
                                {/* </a> */}
                            </div>

                            <div className="socialMedia">
                                <div className="peopleContainer">
                                    <p>2000+ People Joined</p>
                                    <img src={joinedPeople} alt="" />
                                </div>
                                <div className="socialMediaContainer">
                                    <p>Our Social Media</p>
                                    <div id="socialMediaLinks">
                                        <a href="https://instagram.com/nidaan_ai?igshid=NzZlODBkYWE4Ng==" target='_blank'> <img src={instagram} alt="" /></a>
                                        <a href="https://youtube.com/@Nidaan-AI?si=Mzzrn0pSmgibD89U" target='_blank'> <img src={youtube} alt="" /></a>
                                        <a href="https://www.linkedin.com/company/nidaantech" target='_blank'>  <img src={linkedIn} alt="" /></a>
                                        <a href="https://www.facebook.com/profile.php?id=61551775981818" target='_blank'>  <img src={twitter} alt="" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <img src={robot} alt="" className='robot' />
            </div>

            <OldCustomers />
        </>
    )
}

export default Intro;