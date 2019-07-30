import React from 'react';
import './Contact.scss';
import email from '../../../assets/email.svg';
import linkedin from '../../../assets/linkedin.svg';
import octocat from '../../../assets/octocat.png';
import ScrollAnimation from 'react-animate-on-scroll';

const Contact = () => {

    return <div className={"App-Contact"}>
        <p>Want to get in touch?</p>
        <div className={"contact-info-container"}>
            <ScrollAnimation animateIn={"fadeIn"}>
                <div className={"contact-info"}>

                    <a target="_blank" href={"mailto:tylerbriskie@gmail.com"}><img src={email} alt="" /></a>

                    <a target="_blank" href={"mailto:tylerbriskie@gmail.com"}>tylerbriskie@gmail.com</a>
                </div>
            </ScrollAnimation>
            <ScrollAnimation animateIn={"fadeIn"} delay={250}>
            <div className={"contact-info"}>

                <a target="_blank" href={"https://github.com/tylerbriskie"}><img src={octocat} alt="" /></a>
                <a target="_blank" href={"https://github.com/tylerbriskie"}>github.com/tylerbriskie</a>
            </div>
            </ScrollAnimation>
            <ScrollAnimation animateIn={"fadeIn"} delay={500}>
                <div className={"contact-info"}>

                    <a target="_blank" href={"https://linkedin.com/in/tylerbriskie"}><img src={linkedin} alt="" /></a>
                <a target="_blank" href={"https://linkedin.com/in/tylerbriskie"}>linkedin.com/in/tylerbriskie</a>
            </div>
            </ScrollAnimation>
        </div>

    </div>
};

export default Contact;