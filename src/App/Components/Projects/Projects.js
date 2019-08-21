import React, {Component} from 'react';
import './Projects.scss';
import Section from '../Section/Section.js';
import ScrollAnimation from 'react-animate-on-scroll';
import ipsumImage1 from '../../../assets/ipsumProject.PNG';
import ipsumImage2 from '../../../assets/ipsumProjectAddQuote.PNG';

class Projects extends Component {
    render() {
        return (<Section sectionName={"Projects"}>
            <section id={"Projects-Section"}>
                <div className={"single-project-view"}>

                    <aside>
                        <h1>Propane Ipsum</h1>

                        <p>Propane Ipsum is my love letter to Mike Judge's King of the Hill, possibly my favorite comedy television series of all time. This project was made entirely in node.js, with a Mongo database and UI rendered by EJS.</p>
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