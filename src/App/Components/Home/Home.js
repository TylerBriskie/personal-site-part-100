import React, {Component} from 'react';
import './Home.scss';
import 'react-sticky-header/styles.css';
import StickyHeader from 'react-sticky-header';
// import {Link, animateScroll as scroll, scrollSpy } from 'react-scroll';
import scrollToComponent from 'react-scroll-to-component';

export default class Home extends Component {
    componentDidMount() {

        scrollToComponent(this.props.sections.Home, { offset: 0, align: 'middle', duration: 100, ease:'inCirc'});
    }
    // scrollToTop = () => {
    //     scroll.scrollToTop();
    // };
    // goToSkills = () => {
    //     var element = document.getElementById("Skills-Section");
    //
    //     element.scrollIntoView();
    // }

    render(){
        return(
            <div className={"App-Home"}>
                <StickyHeader ref={(section) => { this.props.sections.Home = section; }}
                    // This is the sticky part of the header.
                    header={
                        <div className="Header_root">
                            <h1 className="Header_title" onClick={()=> scrollToComponent(this.props.sections.Home, {duration: 300})}>TYLER BRISKIE</h1>
                            <p>Web Developer.</p>
                            <button
                                    className={"call-to-action"}
                                    onClick={()=> scrollToComponent(this.props.sections.Profile, {duration: 300})}>
                                Nice To Meet You
                            </button>

                            <ul className="Header_links" >
                                <li
                                    onClick={()=> scrollToComponent(this.props.sections.Profile, {duration: 300})}>
                                    Profile
                                </li>
                                <li
                                    onClick={()=> scrollToComponent(this.props.sections.Experience, {duration: 300})}>
                                    Experience
                                </li>
                                <li
                                    onClick={()=> scrollToComponent(this.props.sections.Skills, {duration: 300})}>
                                    Skills
                                </li>
                                <li

                                    onClick={()=> scrollToComponent(this.props.sections.Projects, {duration: 300})}>
                                    Projects
                                </li>
                                <li

                                    onClick={()=> scrollToComponent(this.props.sections.Education, {duration: 300})}>
                                    Education
                                </li>
                                <li

                                    onClick={()=> scrollToComponent(this.props.sections.Contact, {duration: 300})}>
                                    Contact
                                </li>

                            </ul>
                        </div>
                    }
                >
                    <section>
                        <image className={"app-hero-image"}>

                        </image>
                        <p>

                        </p>

                    </section>sectio           </StickyHeader>

            </div>
        );
    }
};