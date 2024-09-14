import React from 'react'
import { Link } from 'react-router-dom'

import { arrow } from "../assets/icons"

const InfoBox = ({ text, link, btnText }) => (
    <div className="info-box">
        {text}
    <Link to={link} className="neo-brutalism-white neo-btn">
        {btnText}
        <img src={arrow} className="w-4 h-4 object-contain"/>
    </Link>
    </div>
)

const renderContent = {
    1: (
        <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
            Hi, I am <span className='font-semibold'>Reza</span>! <br /> Welcome to my page👋
        </h1>
    ),
    2: (
        <InfoBox
            text="Currently interested in learning more about AI and Game Development"
            link="/about"
            btnText="Learn more"
        />
    ),
    3: (
        <InfoBox
            text="Multiple years of experience on game development and working with different clients"
            link="/projects"
            btnText="All projects i've been in"
        />
    ),
    4: (
        <InfoBox
            text="Looking for a dev or want to build games together? I'm available!"
            link="/contact"
            btnText="Let's talk!"
        />
    )
}

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
}

export default HomeInfo