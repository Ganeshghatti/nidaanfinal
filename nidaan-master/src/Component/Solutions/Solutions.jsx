import React from 'react'
import solution1 from '../../Assets/solutions1.svg'
import solution2 from '../../Assets/solutions2.svg'
import solution3 from '../../Assets/solutions3.svg'
import './Solutions.css'

const Solutions = () => {
    return (
        <div className='solutionsContainer'>
            
            <div className="solutionIntro">
                <p className='boldSolutionIntro'>86% People Getting <br /> <span className='boldSolutionIntro boldSolutionIntroBg'>Better Results</span></p>
                <p className='lightSolutionIntro'>Discover the power of our AI chatbot and the extraordinary features that have won the hearts of 86% of our users. From instant responses to personalized insights, our chatbot elevates your interactions like never before. </p>
                <p id="lightSolutionMobile">Experience our AI chatbot's instant, personalized excellence, loved by 86% of users</p>
            </div>

            <div className="solutionItems">
                <div className="solution">
                    <img src={solution1} alt="" className='solutionImage'/>
                    <p className='alignCenter'>Experience Instant Responses <br /> and 24/7 Availability</p>
                </div>
                <div className="solution">
                    <img src={solution2} alt="" className='solutionImage'/>
                    <p className='alignCenter'>Securely Private & <br />Contactless Chat</p>
                </div>
                <div className="solution">
                    <img src={solution3} alt="" className='solutionImage'/>
                    <p className='alignCenter'>Access to Vast Medical <br /> Knowledge</p>
                </div>
            </div>

        </div>
    )
}

export default Solutions;