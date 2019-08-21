import React, {Component} from 'react';
import './Projects.scss';
import Section from '../Section/Section.js';
import ScrollAnimation from 'react-animate-on-scroll';
import ipsumImage1 from '../../../assets/ipsumProject.PNG';
import ipsumImage2 from '../../../assets/ipsumProjectAddQuote.PNG';
import nodeLogo from '../../../assets/nodejs-icon.svg';
import mongoLogo from "../../../assets/mongoLogo.png";



class Projects extends Component {
    render() {
        return (<Section sectionName={"Projects"}>
            <section id={"Projects-Section"}>
                <div className={"single-project-view"}>

                    <aside>
                        <h1>Propane Ipsum</h1>
                        <a target="_blank" href={"https://propane-ipsum.herokuapp.com"}>
                            <h5>
                                Link to live app
                            </h5>
                        </a>
                        <p>When I discovered that this didn't already exist I was sort of shocked.
                            Part placeholder text generator, part quote database,
                            Propane Ipsum is my love letter to Mike Judge's King of the Hill, my all time favorite comedy series. This project was made entirely in node.js, with a Mongo database and UI rendered by EJS.</p>
                        <div className={"tech-stack"}>
                            <ScrollAnimation animateIn={"fadeIn"} delay={666}>
                                <img src={nodeLogo} alt=""/>
                            </ScrollAnimation>
                            <ScrollAnimation animateIn={"fadeIn"} delay={666}>
                                <img src={mongoLogo} alt=""/>
                            </ScrollAnimation>

                        </div>
                    </aside>
                    <article>
                        <img src={ipsumImage1} alt="image 1"></img>
                        <img src={ipsumImage2} alt="image 2"/>
                    </article>
                </div>

            </section>
        </Section>)
    }
}

export default Projects;