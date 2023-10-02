import React from 'react'
import phone from '../../../Assets/phone.svg'
import mail from '../../../Assets/mail.svg'
import map from '../../../Assets/mapPin.svg'
import chat from '../../../Assets/messageCircle.svg'

import './ContactOptions.css'

const ContactOptions = () => {
    return (
        <div className="contactOptionsContainer">
            <div className="contactHeader">
                <h1>Contact with our friendly team</h1>
                <p>Let us know how we can help.</p>
            </div>

            <div className="contactHolder">
                <div className="contactCard">
                    <div className="iconHolder">
                        <img src={phone} alt="" className="icon" />
                    </div>
                    <h2 className="contactCardHeading">Contact with phone</h2>
                    <p className="contactCardInfo">Speak to our friendly Team.</p>
                    <a href='tel:+919234129799' className="contactLink">+91 9234129799</a>
                </div>
                <div className="contactCard">
                    <div className="iconHolder">
                        <img src={chat} alt="" className="icon" />
                    </div>
                    <h2 className="contactCardHeading">Chat with us</h2>
                    <p className="contactCardInfo">Direct message on whatsapp!</p>
                    <a href='https://wa.me/9234129799' target='_blank' className="contactLink">+91 9234129799</a>
                </div>
                <div className="contactCard">
                    <div className="iconHolder">
                        <img src={mail} alt="" className="icon" />
                    </div>
                    <h2 className="contactCardHeading">Contact with Email</h2>
                    <p className="contactCardInfo">Support team will help you.</p>
                    <a href="mailto:nidaan.tech@gmail.com" className="contactLink">nidaan.tech@gmail.com</a>
                </div>
                <div className="contactCard">
                    <div className="iconHolder">
                        <img src={map} alt="" className="icon" />
                    </div>
                    <h2 className="contactCardHeading">Visit our Office</h2>
                    <p className="contactCardInfo">BIT - Mesra, Ranchi</p>
                    <a href="https://shorturl.at/bcfn2" target='_blank' className="contactLink">View on Goggle map</a>
                </div>
            </div>

        </div>
    )
}

export default ContactOptions