import React from 'react';
import AboutCard from './AboutCard'
import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
import person from '../../Assets/Images/person.png';
import notes from '../../Assets/Images/notes.png';
import './../../Assets/Styles/About.scss'

function About() {
    return(
        <div className="about" id="About">
            <h1 className="about__title">About Us</h1>
            <div className="about__card">
                <AboutCard
                    image={notes}
                    title="What is Phantom"
                    description="Phantom is website that provide you easier way to find public bus in Rwanda"
                />
               <AboutCard
                    image={person}
                    title="Why Phantom?"
                    description="Phantom help you to reduce wasting time while you are waiting public transport."
                />
            </div>
      </div>
    )
}

export default About
