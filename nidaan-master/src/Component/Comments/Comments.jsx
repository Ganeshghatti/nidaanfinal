import React from 'react'
import './Comments.css'
import profilePic from '../../Assets/userProfile.png'
import greenUnderline from '../../Assets/greenUnderline.png'

const CommentCard = ({ comment, name, pic }) => {
    return (
        <div className="commentCardContainer">
            <p className="comment">
                {comment}
            </p>
            <div className="commenter">
                <img src={pic} alt="" />
                {name}
            </div>
        </div>
    )
}

export let CommentSlider = () => {
    return (
        <div className="sliderParent">
            <div className="leftFade"></div>
            <div className="rightFade"></div>
            <div className="sliderContainer1">
                <div className="commentSlider1">
                    <div className="commentHolder1">
                        <CommentCard comment={comment1} name={name1} pic={profilePic} />
                        <CommentCard comment={comment2} name={name2} pic={profilePic} />
                        <CommentCard comment={comment3} name={name3} pic={profilePic} />
                        <CommentCard comment={comment4} name={name4} pic={profilePic} />
                        <CommentCard comment={comment5} name={name5} pic={profilePic} />
                        <CommentCard comment={comment6} name={name6} pic={profilePic} />
                    </div>
                    <div className="commentHolder1">
                        <CommentCard comment={comment1} name={name1} pic={profilePic} />
                        <CommentCard comment={comment2} name={name2} pic={profilePic} />
                        <CommentCard comment={comment3} name={name3} pic={profilePic} />
                        <CommentCard comment={comment4} name={name4} pic={profilePic} />
                        <CommentCard comment={comment5} name={name5} pic={profilePic} />
                        <CommentCard comment={comment6} name={name6} pic={profilePic} />
                    </div>
                </div>
            </div>

            <div className="sliderContainer2">
                <div className="commentSlider2">
                    <div className="commentHolder2">
                        <CommentCard comment={comment7} name={name7} pic={profilePic} />
                        <CommentCard comment={comment8} name={name8} pic={profilePic} />
                        <CommentCard comment={comment9} name={name9} pic={profilePic} />
                        <CommentCard comment={comment10} name={name10} pic={profilePic} />
                        <CommentCard comment={comment11} name={name11} pic={profilePic} />
                        <CommentCard comment={comment12} name={name12} pic={profilePic} />
                    </div>
                    <div className="commentHolder2">
                        <CommentCard comment={comment7} name={name7} pic={profilePic} />
                        <CommentCard comment={comment8} name={name8} pic={profilePic} />
                        <CommentCard comment={comment9} name={name9} pic={profilePic} />
                        <CommentCard comment={comment10} name={name10} pic={profilePic} />
                        <CommentCard comment={comment11} name={name11} pic={profilePic} />
                        <CommentCard comment={comment12} name={name12} pic={profilePic} />
                    </div>
                </div>
            </div>
        </div>
    )
}

let comment1 = "Thanks to Nidaan, I have all my medical info at my fingertips. It's like a digital health assistant ";
let name1 = "Nikhil Kumar Jha"
let comment2 = "Nidaan's AI chatbot is my 24/7 health companion. It's as good as having a doctor in my pocket.";
let name2 = "Arya Singh"
let comment3 = "Nidaan's 'Pay for What You Use' approach is a breath of fresh air in the expensive world of healthcare.";
let name3 = "Rushaan Khan"
let comment4 = "Nidaan has made healthcare affordable for everyone. No more hidden fees, just quality advice.";
let name4 = "Ridhi Mishra"
let comment5 = "Nidaan's AI chatbot is a game-changer for remote areas. Access to healthcare has never been easier";
let name5 = "Shashank Pathak"
let comment6 = "Nidaan keeps me informed and healthy. It's my one-stop solution for medical advice and records.";
let name6 = "Rishav Singh Solanki"
let comment7 = "I've tried other AI health apps, but Nidaan's 'Pay for What You Use' model makes it stand out. Great value!";
let name7 = "Baba Charan Patel"
let comment8 = "Nidaan is a must-have for travelers. Access medical advice on the go and store vaccination records securely.";
let name8 = "Vishal Kumar Yadav"
let comment9 = "As a busy professional, Nidaan is a lifesaver. The chatbot provides quick answers to my health queries, and I can store all my medical info securely.";
let name9 = "Raunak Singh"
let comment10 = "I've never seen a healthcare solution this innovative. Nidaan truly understands the needs of today's generation to talk in their way.";
let name10 = "Manpreet Singh"
let comment11 = "Nidaan has made healthcare accessible. I can chat with their AI anytime, anywhere, and it's way more affordable than other options.";
let name11 = "Raj Kamal Yadav"
let comment12 = "I've never experienced such a user-friendly healthcare platform. Nidaan's AI chatbot is a friend in need, and the pricing is incredibly fair.";
let name12 = "Yodendra Nath Kumar"
let comment13 = "I'm a fan of Nidaan's 'Pay for What You Use' pricing. It's economical and user-centric. The AI chatbot is a bonus.";
let name13 = "Gautam Mahajan"

const Comments = () => {
    return (
        <div className='commentsContainer'>
            <h2 className="commentsHeading">Trusted by 2000+ People <img src={greenUnderline} alt="" /></h2>

            <CommentSlider />

        </div>
    )
}

export default Comments