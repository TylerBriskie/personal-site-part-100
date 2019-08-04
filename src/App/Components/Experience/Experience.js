import React, {Component} from 'react';
import './Experience.scss';
import Section from '../Section/Section.js';
import v4logo from '../../../assets/v4logo.svg'

class Experience extends Component {
    render() {
        return (<Section sectionName={"Experience"} theme={"dark"}>
            <section id={"Experience-Section"}>
                <h1>Experience</h1>
                <div className={"experience-item"}>
                    <div className={"experience-subheading"}>
                        <img src={v4logo} alt=""/>
                        <span>May 2017 - Present</span>
                    </div>
                    <div className={"experience-description"}>
                        <p>
                            Vertafore was my first software job out of coding boot camp.
                            At my time there, I've been fortunate enough to work on several different projects.
                        </p>
                        <p>
                            Most recently,
                            I've been working on a legacy Java based application, developing new features, addressing bugs and customer escalations, and
                            helping to modernize a 15+ year old solution.
                        </p>
                        <p>
                            Previously, I was part of a multi-team effort to modernize Vertafore's entire platform
                          During this process, I worked on designing APIs in Java Spring, as well as designing and implementing
                            components for an end-user facing React web app.
                        </p>
                        <p>

                        </p>
                    </div>

                </div>
            </section>

        </Section>)
    }
}

export default Experience;