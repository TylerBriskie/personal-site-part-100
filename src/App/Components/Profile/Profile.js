import React, {Component} from 'react';
import './Profile.scss';
import Section from '../Section/Section.js';
import ScrollAnimation from 'react-animate-on-scroll';
import scrollToComponent from "react-scroll-to-component";
import profilePic from '../../../assets/PictureFramed.png';
class Profile extends Component {
    render() {
        return (<Section sectionName={"Profile"} >
            <section id={"Profile-Section"}>
                <div className={"image-column"}>
                    <img src={profilePic} alt=""/>
                    <h4>Tyler Briskie</h4>

                    <span>Web Developer.</span>
                    <span>Computer Nerd.</span>
                    <span>Guitar Hero.</span>
                    <span>Graphic Designer.</span>
                    <span>Bicycle Enthusiast.</span>
                </div>
                <div className={"info-column"}>
                    <p>
                        I work as a software engineer in Denver, Colorado.
                    </p>

                    <p>
                        In 2016, after a decade of working in the music business, I decided to learn to code.  I attended galvanize's web development boot camp and have been working as a software engineer ever since.
                    </p>

                    <p>
                        I still love playing music, but now I spend most of my time learning new web frameworks and javascript libraries.
                    </p>
                </div>



            </section>


        </Section>)
    }
}

export default Profile;