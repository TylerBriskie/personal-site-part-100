import React, {Component, useState} from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

import './Experience.scss';
import VerticalSelector from '../VerticalSelector/VerticalSelector';
import Section from '../Section/Section.js';
import v4logo from '../../../assets/v4logo.svg'
import presidioLogo from '../../../assets/presidio-logo.png';
import angularLogo from '../../../assets/angular-js-logo.png';
import laravelLogo from '../../../assets/laravel-logo.png'
import reactLogo from '../../../assets/React.js_logo-512.png'
import javaLogo from '../../../assets/javaLogo.png'
import springBoot from '../../../assets/springBoot.png'
import mariaDbLogo from '../../../assets/maria-db-logo.png'


const Experience = () => {

    const myJobs = [
        {
            index: 0,
            thumbnail: presidioLogo,
            title: "Lead Developer",
            subheading: "November 2019 - April 2020",
            description: [
                "At Presidio, I worked as a team of one - I was the sole developer, and functioned as my own QA, product owner, DBA, and dev ops engineer. ",
                "I worked on a web app used by cyber security analysts and assessors to catalog their clients' security vulnerabilities, and export their findings into a PDF to deliver to the client.",
                "While I mostly worked on new feature development, I was also responsible for handling some user escalations with the existing platform, as well as helping new users get access to the correct permissions and clients.  I used Angular, PHP / Laravel, and MariaDB extensively on this app, as well as Duo two-factor authentication."
            ],
            techStack: [
                angularLogo,
                laravelLogo,
                mariaDbLogo
            ]
        },
        {
            index: 1,
            thumbnail: v4logo,
            title: "Software Development Engineer I",
            subheading: "May 2017 - October 2019",
            description: [
                "Vertafore was my first software job out of coding boot camp. They make software for insurance professionals, and during my time there I was fortunate enough to work on a few different interesting projects.",
                "Most recently, I worked on a 20+ year old Java application working on new feature development, fixing bugs, addressing customer escalations, and helping to modernize a 20+ year old solution.",
                "Previously, I was part of a multi-team effort to modernize Vertafore's entire platform During this process, I worked on designing APIs in Java / Spring, as well as designing and implementing UI components for a web app to be used by our customers' customers."
            ],
            techStack: [
                reactLogo,
                javaLogo,
                springBoot,
            ]
        }
    ]

    // LOCAL STATE
    const [job, setJob] = useState(myJobs[0])


    

    return (
        <Section sectionName={"Experience"} theme={"dark"}>
         
            <VerticalSelector selectedIndex={job.index} items={myJobs} selectItem={(i) => setJob(myJobs[i])}>

            </VerticalSelector>
            <section id={"Experience-Section"}>
                <ScrollAnimation initiallyVisible={true}animateIn={"zoomOut"} delay={1000} duration={2}>
                    <h1>Experience</h1>
                </ScrollAnimation>
                <div className={"experience-item"}>

                    <div className={"experience-description"}>
                        <img src={job.thumbnail} alt="Company Logo"/>
                        <h6>{job.title}</h6>
                        {
                            job.description.map((p, i) => 
                                <ScrollAnimation key={i} animateIn={"fadeInRight"} animateOut={"fadeOutRight"}>
                                    <p>{p}</p>
                                </ScrollAnimation>
                            )
                        }
                        

                        <div className={"techstack"}>
                            {
                                job.techStack.map((t, i) => 
                                    <ScrollAnimation key={i} animateIn={"fadeIn"}>
                                        <img  src={t} alt=""/>
                                    </ScrollAnimation>
                                )
                            }
    

                        </div>
                    </div>

                </div>                
            </section>

        </Section>
    )
    
}

export default Experience;