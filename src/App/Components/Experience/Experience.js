import React, {Component} from 'react';
import './Experience.scss';
import Section from '../Section/Section.js';

class Experience extends Component {
    render() {
        return (<Section sectionName={"Experience"} theme={"dark"}>
            <section>
                <h1>Resume</h1>

                <p>And now, in the spirit of the season: start shopping. And for every dollar of Krusty
                    merchandise you buy, I will be nice to a sick kid. For legal purposes, sick kids may include
                    hookers with a cold. Look out, Itchy! He's Irish!
                </p>
            </section>

        </Section>)
    }
}

export default Experience;