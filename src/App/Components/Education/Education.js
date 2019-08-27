import React, {Component} from 'react';
import './Education.scss';
import Section from '../Section/Section.js';
import ScrollAnimation from 'react-animate-on-scroll';

import cuDenverLogo from '../../../assets/cuDenver.png';
import galvanizeLogo from '../../../assets/galvanize.png';



class Education extends Component {
    render() {
        return (<Section sectionName={"Education"} theme={"dark"}>
            <section id={"Education-Section"}>
                <ScrollAnimation initiallyVisible={true}animateIn={"zoomOut"} delay={1000} duration={2}>
                    <h1>Education</h1>
                </ScrollAnimation>
                <div className={"education-item"} >
                    <div>
                        <ScrollAnimation animateIn={"zoomIn"} >
                            <img className={"logo"} src={galvanizeLogo} alt=""/>
                            <h6>2016-2017</h6>
                        </ScrollAnimation>
                    </div>

                    <ScrollAnimation className="education-description" animateIn={"fadeInRight"}>
                        <p>In the Galvanize Web Development Immersive, I learned web development in JavaScript and Node.js through 1000 hours of dedicated coursework.  The most difficult and rewarding 24 weeks of my life. </p>
                        <p>1000 hours of coursework dedicated to and JavaScript and node.js</p>
                    </ScrollAnimation>
                </div>
                <div className={"education-item"}>
                    <div>
                        <ScrollAnimation animateIn={"zoomIn"} >
                            <img className={"logo"} src={cuDenverLogo} alt=""/>
                            <h6>2001-2005</h6>
                        </ScrollAnimation>
                    </div>
                    <ScrollAnimation className="education-description" animateIn={"fadeInRight"}>
                        <p>Attended CU Denver and studied music with an emphasis in recording and music production and spent the following decade working as a touring sound engineer and musician.  Ask me about my days on the road!</p>
                    </ScrollAnimation>

                </div>



            </section>

        </Section>)
    }
}

export default Education;