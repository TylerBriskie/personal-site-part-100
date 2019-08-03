import React, {Component} from 'react';
import './Projects.scss';
import Section from '../Section/Section.js';
import ScrollAnimation from 'react-animate-on-scroll';

class Projects extends Component {
    render() {
        return (<Section sectionName={"Projects"}>
            <section>
                <h1>Projects PAGE</h1>

                <p>And now, in the spirit of the season: start shopping. And for every dollar of Krusty
                    merchandise you buy, I will be nice to a sick kid. For legal purposes, sick kids may include
                    hookers with a cold. Look out, Itchy! He's Irish!</p>
            </section>

        </Section>)
    }
}

export default Projects;