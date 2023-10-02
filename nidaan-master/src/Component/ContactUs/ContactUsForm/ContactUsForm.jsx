import React from 'react'
import bg from '../../../Assets/formBg.webp'
import send from '../../../Assets/send.svg'

import './ContactUsForm.css'

const About = () => {
    return (
        <div className="aboutContainer" id='aboutUs'>

            <div className="abouts">
                <h2>About Nidaan</h2>
                <p className='trust'>
                    “ Your Trusted Health Companion ”
                </p>
                <p className='aboutDetail'>
                    At Nidaan, we're dedicated to simplifying healthcare. Our chatbot, powered by Google AI - PaLM, offers answers to all your health queries, 24/7
                </p>
            </div>
            <div className="abouts">
                <h3 className="aboutSubHeading">Our Mission</h3>
                <p className="aboutDetail">
                    We're on a mission to provide easy access to reliable health information. With us, you can ask any health-related question and get accurate responses.
                </p>
            </div>
            <div className="abouts">
                <h3 className="aboutSubHeading">Why Choose Us?</h3>
                <ul className="aboutDetail">
                    <li className='aboutList'>
                        Expertise: Backed by Google AI - PaLM, we offer reliable health insights.
                    </li>
                    <li className='aboutList'>
                        Availability: Get help anytime, day or night.
                    </li>
                    <li className='aboutList'>
                        Privacy: Your information is secure.
                    </li>
                    <li className='aboutList'>
                        User-Friendly: Easy-to-use chat interface.
                    </li>
                </ul>
            </div>
            <div className="abouts">
                <h3 className="aboutSubHeading">Meet our Team</h3>
                <ul className="aboutDetail">
                    <li className='aboutList'>
                        <a href="https://www.linkedin.com/in/kartik-kumar-838431206/" target='_blank'>
                            Kartik Kumar
                        </a>
                        - Co-founder, Marketing & Operation Head
                    </li>
                    <li className='aboutList'>
                        <a href="https://www.linkedin.com/in/shievam/" target='_blank'>
                            Shivam Kumar
                        </a>
                        - Co-founder & Executive Head
                    </li>
                    <li className='aboutList'>
                        <a href="https://www.linkedin.com/in/shishirkjaiswal/" target='_blank'>
                            Shishir Jaishwal
                        </a> - Mentor and Guide
                    </li>
                    <li className='aboutList'>
                        <a href="https://www.linkedin.com/in/ayush-anand-33b3491b7/" target='_blank'>
                            Ayush Anand
                        </a>
                        - Tech Head
                    </li>
                    <li className='aboutList'>
                        <a href="https://www.linkedin.com/in/ganesh-ghatti/" target='_blank'>
                            Ganesh Ghatti
                        </a>
                        - Tech Developer
                    </li>
                </ul>
            </div>
        </div>
    )
}

const ContactUsForm = () => {
    return (
        <div className='ContactFormContainer'>
            <img src={bg} alt="" className="formBg" />
            <div className="formAboutContainer">
                <div className="formContainer">
                    <div className="formHeader">
                        <h2>Facing any trouble? We are here to help.</h2>
                        <p>Tell us more about yourself and what you’re got in my mind</p>
                    </div>
                    <form action="">
                        <input type="text" placeholder='Your name' name="" id="" />
                        <input type="email" name="" id="" placeholder='Your @Email ID' />
                        <input type="text" name="" id="" placeholder='Tell us your problem' className='formFeedback' />
                        <button type="submit">Submit now <img src={send} alt="" className='submitIcon' /></button>
                    </form>
                </div>

                <About />

            </div>
        </div>
    )
}

export default ContactUsForm