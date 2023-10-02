import React from 'react'
import StarYellow from '../../Assets/Star Yellow.svg'
import StarGray from '../../Assets/Star Grey.svg'
import reviewer1 from '../../Assets/reviewer1.webp'
import reviewer2 from '../../Assets/reviewer5.webp'
import reviewer3 from '../../Assets/reviewer3.png'
import reviewer4 from '../../Assets/reviewer2.webp'
import reviewer5 from '../../Assets/reviewer4.webp'
import reviewer6 from '../../Assets/reviewer9.webp'
import reviewer7 from '../../Assets/reviewer7.webp'
import reviewer8 from '../../Assets/reviewer8.webp'
import reviewer9 from '../../Assets/reviewer6.webp'
import reviewer10 from '../../Assets/reviewer10.webp'
import reviewer11 from '../../Assets/reviewer11.webp'
import reviewer12 from '../../Assets/reviewer8.png'

import './Reviews.css'

const Reviews = () => {
    return (
        <div className='reviewerConatainer'>

            <h2 className="reviewerHeading">Check out what our users are saying?</h2>
            <p className="reviewerSubHeading">Here are few response from our beta program</p>
            <div className="reviewerMain">
                <div className="reviewerLeftItem">
                    <p className="review">The healthcare chatbot was a great help! It provided me with quick and accurate answers to my medical queries. Very impressed with its knowledge and user-friendly interface. Highly recommend it to anyone seeking reliable health advice!</p>
                    <p className="reviewer">Jatin Kapoor</p>

                    <div className="rating">
                        <img src={StarYellow} alt="" className='star'/>
                        <img src={StarYellow} alt="" className='star'/>
                        <img src={StarYellow} alt="" className='star'/>
                        <img src={StarYellow} alt="" className='star'/>
                        <img src={StarGray} alt="" className='star'/>
                    </div>
                </div>
                <div className="reviewerRightItem">
                    <img src={reviewer1} alt="" className='reviewerImg'/>
                    <img src={reviewer2} alt="" className='reviewerImg'/>
                    <img src={reviewer3} alt="" className='reviewerImg'/>
                    <img src={reviewer4} alt="" className='reviewerImg'/>
                    <img src={reviewer5} alt="" className='reviewerImg'/>
                    <img src={reviewer6} alt="" className='reviewerImg'/>
                    <img src={reviewer7} alt="" className='reviewerImg'/>
                    <img src={reviewer8} alt="" className='reviewerImg'/>
                    <img src={reviewer9} alt="" className='reviewerImg'/>
                    <img src={reviewer10} alt="" className='reviewerImg'/>
                    <img src={reviewer11} alt="" className='reviewerImg'/>
                    <img src={reviewer12} alt="" className='reviewerImg'/>
                </div>
            </div>
        </div>
    )
}

export default Reviews;