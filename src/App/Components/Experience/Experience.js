import React, {Component, useState} from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

import './Experience.scss';
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
            companyName: "Presidio",
            companyLogo: presidioLogo,
            title: "Lead Developer",
            dates: "November 2019 - April 2020",
            description: [
                "At Presidio, I worked as a team of one - I was the sole developer, and functioned as my own QA, product owner, DBA, and dev ops engineer. ",
                "I worked on a web app used by cyber security analysts and assessors to catalog their clients' security vulnerabilities, as well as exporting the data into a PDF deliverable to the client with their recommendations for moving forward.",
                "While I mostly worked on new feature development, I was also responsible for handling some user escalations with the existing platform, as well as helping new users get access to the correct permissions and clients.  I used Angular, PHP / Laravel, and MariaDB extensively on this app, as well as Duo two-factor authentication."
            ],
            techStack: [
                angularLogo,
                laravelLogo,
                mariaDbLogo
            ]
        },
        {
            companyName: "Vertafore",
            companyLogo: v4logo,
            title: "Software Development Engineer I",
            dates: "May 2017 - October 2019",
            description: [
                "Vertafore was my first software job out of coding boot camp. They make software for insurance professionals, and during my time there I was fortunate enough to work on a few different interesting projects.",
                "Most recently, I worked on an older Java based application, developing new features, addressing bugs and customer escalations, and helping to modernize a 20+ year old solution.",
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
            <ul className="vertical-job-selector">
                {
                    myJobs.map((j, index) =>
                        <li>
                            <div key={index} className={"experience-subheading"} onClick={() => setJob(myJobs[index])} >
                                <img src={j.companyLogo} alt="Brand Logo"/>
                                <span>{j.dates}</span>
                            </div>
                        </li>  
                    
                    )
                }

            </ul>
            <section id={"Experience-Section"}>
                <ScrollAnimation initiallyVisible={true}animateIn={"zoomOut"} delay={1000} duration={2}>
                    <h1>Experience</h1>
                </ScrollAnimation>
                <div className={"experience-item"}>
                    <ScrollAnimation animateIn={"bounceInLeft"} duration={.65}>
                        <div className={"experience-subheading"}>
                            <img src={job.companyLogo} alt="Company Logo"/>
                            <span>{job.dates}</span>
                        </div>
                    </ScrollAnimation>
                    <div className={"experience-description"}>
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
                
                {/* <div className={"experience-item"}>
                    <ScrollAnimation animateIn={"bounceInLeft"} duration={.65}>
                        <div className={"experience-subheading"}>
                            <img src={v4logo} alt="Vertafore Company Logo"/>
                            <span>May 2017 - October 2019</span>
                        </div>
                    </ScrollAnimation>
                    <div className={"experience-description"}>
                        <ScrollAnimation animateIn={"fadeInRight"}>
                            <p>
                                Vertafore was my first software job out of coding boot camp. They make software for insurance professionals, and
                                during my time there I was fortunate enough to work on a few different interesting projects.
                            </p>
                        </ScrollAnimation>
                        <ScrollAnimation animateIn={"fadeInRight"}>
                            <p>
                                Most recently,
                                I worked on an older Java based application, developing new features, addressing bugs and customer escalations, and
                                helping to modernize a 20+ year old solution.
                            </p>
                        </ScrollAnimation>
                        <ScrollAnimation animateIn={"fadeInRight"}>
                            <p>
                                Previously, I was part of a multi-team effort to modernize Vertafore's entire platform
                                During this process, I worked on designing APIs in Java / Spring, as well as designing and implementing
                                UI components for a web app to be used by our customers' customers.
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

                </div> */}
            </section>

        </Section>
    )
    
}

export default Experience;