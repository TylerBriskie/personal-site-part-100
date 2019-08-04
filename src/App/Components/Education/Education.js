import React, {Component} from 'react';
import './Education.scss';
import Section from '../Section/Section.js';
import ScrollAnimation from 'react-animate-on-scroll';

class Education extends Component {
    render() {
        return (<Section sectionName={"Education"} theme={"dark"}>
            <section>
                <ScrollAnimation initiallyVisible={true}animateIn={"zoomOut"} delay={1000} duration={2}>
                    <h1>Education</h1>
                </ScrollAnimation>
                <button>call to action</button>
                <p>And now, in the spirit of the season: start shopping. And for every dollar of Krusty
                    merchandise you buy, I will be nice to a sick kid. For legal purposes, sick kids may include
                    hookers with a cold. Look out, Itchy! He's Irish!</p>
            </section>

        </Section>)
    }
}

export default Education;