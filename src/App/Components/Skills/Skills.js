import React, {Component} from 'react';
import './Skills.scss';
import Section from '../Section/Section.js';
import ScrollAnimation from 'react-animate-on-scroll';
import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";

export default class Skills extends Component {
    componentDidMount(){
    }

    incrementTo(number){

    }

    render() {
        return (<Section sectionName={"Skills"}>
            <section id={"Skills-Section"}>
                <h3>Skills</h3>
                <div className={"skill-columns"}>
                    <div className={"skill-bars"}>
                        <ul>
                            <li>
                                <span>Javascript</span>
                                <ScrollAnimation animateIn={"bounceInLeft"}>
                                    <Progress theme={{
                                        success: {
                                            symbol: '‍',
                                            // trailColor: 'rgb(255, 252, 252)',
                                            color: 'rgb(0, 255, 233)'
                                        }}} percent={88} status={"success"} />
                                </ScrollAnimation>
                            </li>
                            <li>
                                <span>React.JS</span>
                                <ScrollAnimation animateIn={"bounceInLeft"}>
                                    <Progress theme={{
                                        success: {
                                            symbol: '‍',
                                            // trailColor: 'rgb(255, 252, 252)',
                                            color: 'rgb(0, 255, 233)'
                                        }}} percent={88} status={"success"} />
                                </ScrollAnimation>
                            </li>
                            <li>
                                <span>Node</span>
                                <ScrollAnimation animateIn={"bounceInLeft"}>
                                    <Progress theme={{
                                        success: {
                                            symbol: '‍',
                                            color: 'rgb(0, 188, 222)'
                                        }}} percent={66} status={"success"} />

                                </ScrollAnimation>
                            </li>
                            <li>
                                <span>Webpack</span>
                                <ScrollAnimation animateIn={"bounceInLeft"}>
                                    <Progress theme={{
                                        success: {
                                            symbol: '‍',
                                            color: 'rgb(0, 188, 222)'
                                        }}} percent={66} status={"success"} />

                                </ScrollAnimation>
                            </li>
                            <li>
                                <span>Java</span>
                                <ScrollAnimation animateIn={"bounceInLeft"}>
                                    <Progress theme={{
                                        success: {
                                            symbol: '‍',
                                            color: 'rgb(0, 188, 222)'
                                        }}} percent={66} status={"success"} />

                                </ScrollAnimation>
                            </li>
                            <li>
                                <span>Spring</span>
                                <ScrollAnimation animateIn={"bounceInLeft"}>
                                    <Progress theme={{
                                        success: {
                                            symbol: '‍',
                                            color: 'rgb(85, 106, 180)'
                                        }}} percent={45} status={"success"} />
                                </ScrollAnimation>
                            </li>
                            <li>
                                <span>Postgres</span>
                                <ScrollAnimation animateIn={"bounceInLeft"}>
                                    <Progress theme={{
                                        success: {
                                            symbol: '‍',
                                            color: 'rgb(85, 104, 180)'
                                        }}} percent={45} status={"success"} />

                                </ScrollAnimation>
                            </li>
                            <li>
                                <span>MongoDB</span>
                                <ScrollAnimation animateIn={"bounceInLeft"}>
                                    <Progress theme={{
                                        success: {
                                            symbol: '‍',
                                            color: 'rgb(222, 44, 222)'
                                        }}} percent={33} status={"success"} />

                                </ScrollAnimation>
                            </li>
                        </ul>


                    </div>
                </div>

            </section>
        </Section>)
    }
}