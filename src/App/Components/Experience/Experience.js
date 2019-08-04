import React, {Component} from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

import './Experience.scss';
import Section from '../Section/Section.js';
import v4logo from '../../../assets/v4logo.svg'
import reactLogo from '../../../assets/React.js_logo-512.png'
import javaLogo from '../../../assets/javaLogo.png'
import springBoot from '../../../assets/springBoot.png'


class Experience extends Component {
    render() {
        return (<Section sectionName={"Experience"} theme={"dark"}>
            <section id={"Experience-Section"}>
                <ScrollAnimation initiallyVisible={true}animateIn={"zoomOut"} delay={1000} duration={2}>
                    <h1>Experience</h1>
                </ScrollAnimation>
                <div className={"experience-item"}>
                    <ScrollAnimation animateIn={"bounceInLeft"} duration={.65}>
                        <div className={"experience-subheading"}>
                            <img src={v4logo} alt=""/>
                            <span>May 2017 - Present</span>
                        </div>
                    </ScrollAnimation>
                    <div className={"experience-description"}>
                        <ScrollAnimation animateIn={"fadeInRight"}>
                            <p>
                                Vertafore was my first software job out of coding boot camp.
                                At my time there, I've been fortunate enough to work on several different projects.
                            </p>
                        </ScrollAnimation>
                        <ScrollAnimation animateIn={"fadeInRight"}>
                            <p>
                                Most recently,
                                I've been working on a legacy Java based application, developing new features, addressing bugs and customer escalations, and
                                helping to modernize a 15+ year old solution.
                            </p>
                        </ScrollAnimation>
                        <ScrollAnimation animateIn={"fadeInRight"}>
                            <p>
                                Previously, I was part of a multi-team effort to modernize Vertafore's entire platform
                                During this process, I worked on designing APIs in Java Spring, as well as designing and implementing
                                components for an end-user facing React web app.
                            </p>
                        </ScrollAnimation>


                        <div className={"techstack"}>
                            <ScrollAnimation animateIn={"fadeIn"}>
                                <img src={reactLogo} alt=""/>
                            </ScrollAnimation>
                            <ScrollAnimation animateIn={"fadeIn"} delay={333}>
                                <img src={javaLogo} alt=""/>
                            </ScrollAnimation>
                            <ScrollAnimation animateIn={"fadeIn"} delay={666}>
                                <img src={springBoot} alt=""/>
                            </ScrollAnimation>

                        </div>
                    </div>

                </div>
            </section>

        </Section>)
    }
}

export default Experience;