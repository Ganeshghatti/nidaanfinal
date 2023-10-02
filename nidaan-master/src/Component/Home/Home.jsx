import React from 'react'
import Intro from '../Intro/Intro'
import Solutions from '../Solutions/Solutions'
import Upcoming from '../Upcoming/Upcoming'
import Chatbot from '../ChatBot/Chatbot'
import Reviews from '../Reviews/Reviews'
import FAQ from '../FAQ/FAQ'

const Home = () => {
    return (
        <div>
            <Intro />

            <Solutions />

            <Upcoming />

            <Chatbot />

            <Reviews />

            <FAQ />
        </div>
    )
}

export default Home