import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { HashLink } from 'react-router-hash-link';
import upRightArrow from '../../Assets/arrow-up-right.png'
import virus from '../../Assets/virus.png'
import nurse from '../../Assets/nurse.png'
import gadgets from '../../Assets/gadgets.png'
import monitor from '../../Assets/monitor.png'
import medication from '../../Assets/medication.png'
import doctor from '../../Assets/animeDoctor.png'
import clock from '../../Assets/clock.png'
import shareIcon from '../../Assets/shareIcon.png'
import linkIcon from '../../Assets/linkIcon.png'

import './AiUses.css'

const ShareSection = () => {

    // insert url link here
    function copyURL() {
        navigator.clipboard.writeText("https://nidaantech.netlify.app/");

        toast.success('Link copied in your clipboard!', {
            position: "bottom-center",
            autoClose: 1500,
            hideProgressBar: true,
            closeOnClick: false,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
            theme: "dark",
        });
    }

    const handleShareButtonClick = () => {
        if (navigator.share) {
            // Use navigator.share to share content
            navigator.share({
                title: 'Nidaan',
                text: "We're on a mission to provide easy access to reliable health information. With us, you can ask any health-related question and get accurate responses.",
// url
                url: 'https://nidaantech.netlify.app/'
            })
                .then(() => console.log('Successfully shared'))
                .catch((error) => console.error('Error sharing:', error));
        } else {
            // Handle the case where navigator.share is not available
            console.error('navigator.share is not supported in this environment');
        }
    };


    return (
        <div className="shareSectionContainer">
            <h2 className="shareHeader"> Show You <span className="deepBlue">Care </span> Share <span className="lightBlue">Nidaan</span></h2>
            <p className="shareData">Help your friends and family make informed decisions about their health by sharing Nidaan with them.</p>

            <div className="shareActionContainer">
                <button className="shareLink" onClick={handleShareButtonClick}>Share Link <img src={shareIcon} alt="" className='shareLogo' /></button>
                <button className="copyLink" onClick={copyURL}>Copy Link <img src={linkIcon} alt="" className='shareLogo' /></button>
            </div>
        </div>
    )
}


const AiUses = () => {
    return (
        <>
            <div className='AiUsesContainer'>
                <h2 className='AiUsesHeading'>Experience the power of <span className='blueBg'>AI in healthcare</span></h2>

                <div className="AiCardConatiner">

                    <div className="AiCard">
                        <div className="cardTop">
                            <img src={virus} alt="" className='AiCardImg' />
                            {/* <div className="upcoming">
                            <img src={clock} alt="" />
                            Upcoming
                        </div> */}
                        </div>
                        <h4 className="cardHeading">Find out the probability of diseases</h4>
                        <p className="cardDetails">Submit anonymized details regarding your medical history, test results, and current condition. Receive comprehensive differential diagnosis (DDx) - a list of potential diseases with their probabilities.</p>
                    </div>

                    <div className="AiCard">
                        <div className="cardTop">
                            <img src={nurse} alt="" className='AiCardImg' />
                            <div className="upcoming">
                                <img src={clock} alt="" />
                                Upcoming
                            </div>
                        </div>
                        <h4 className="cardHeading">Personal Health Profile</h4>
                        <p className="cardDetails">Chatbot creates a personalized health profile on your first interaction, storing medical history, allergies, medications, and shared conditions. Ensuring precise, customized care in subsequent interactions, forming a strong healthcare foundation</p>
                    </div>

                    <div className="AiCard">
                        <div className="cardTop">
                            <img src={gadgets} alt="" className='AiCardImg' />
                            <div className="upcoming">
                                <img src={clock} alt="" />
                                Upcoming
                            </div>
                        </div>
                        <h4 className="cardHeading">Integration with Wearable Devices</h4>
                        <p className="cardDetails">Our chatbot seamlessly integrates with wearable health devices, like smartwatches and fitness trackers. By accessing data, it gains insights into your health trends, providing more precise and relevant guidance</p>
                    </div>

                    <div className="AiCard">
                        <div className="cardTop">
                            <img src={monitor} alt="" className='AiCardImg' />
                            <div className="upcoming">
                                <img src={clock} alt="" />
                                Upcoming
                            </div>
                        </div>
                        <h4 className="cardHeading">Real- Time health Monitoring</h4>
                        <p className="cardDetails">Stay informed with real-time health alerts for continuous monitoring. Track glucose levels, blood pressure, and more. Receive notifications for concerning changes, prompting timely actions to manage diabetes and overall well-being</p>
                    </div>

                    <div className="AiCard">
                        <div className="cardTop">
                            <img src={medication} alt="" className='AiCardImg' />
                            <div className="upcoming">
                                <img src={clock} alt="" />
                                Upcoming
                            </div>
                        </div>
                        <h4 className="cardHeading">Medication Management Made Easy</h4>
                        <p className="cardDetails">Our chatbot simplifies medication management. It sends timely reminders for your meds and assists with prescription refills. No more missed doses or rushed pharmacy trips. Enjoy hassle-free healthcare support</p>

                    </div>

                    <div className="AiCard">
                        <div className="cardTop">
                            <img src={doctor} alt="" className='AiCardImg' />
                            <div className="upcoming">
                                <img src={clock} alt="" />
                                Upcoming
                            </div>
                        </div>
                        <h4 className="cardHeading">Doctor Referral and Appointment Scheduling</h4>
                        <p className="cardDetails">Find the right healthcare provider and schedule appointments with our chatbot when professional medical attention is needed. Streamlining the process for prompt care</p>
                    </div>

                </div>

                <HashLink smooth to="/meetneo/#chatBot">
                    <button>Try Nidaan for free <img src={upRightArrow} alt="" /></button>
                </HashLink>

            </div >


            <ShareSection />
            <ToastContainer />
        </>
    )
}

export default AiUses;