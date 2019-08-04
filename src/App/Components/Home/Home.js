import React, {Component} from 'react';
import './Home.scss';
import 'react-sticky-header/styles.css';
import StickyHeader from 'react-sticky-header';
import {Link, animateScroll as scroll, scrollSpy } from 'react-scroll';
import scrollToComponent from 'react-scroll-to-component';

export default class Home extends Component {
    componentDidMount() {
        scrollToComponent(this.props.sections.Home, { offset: 0, align: 'middle', duration: 100, ease:'inCirc'});
    }


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
                                {/*<li*/}
                                    {/*onClick={()=> scrollToComponent(this.props.sections.Profile, {duration: 300})}>*/}
                                    {/*Profile*/}
                                {/*</li>*/}
                                <Link
                                    smooth={true}
                                    to={this.props.sections.Profile}
                                    activeClass={"active"}
                                    spy={true}
                                    duration={500}
                                >
                                    Profile
                                </Link>
                                <Link
                                    smooth={true}
                                    to={this.props.sections.Experience}
                                    activeClass={"active"}
                                    spy={true}
                                    duration={500}
                                >
                                    Experience
                                </Link>
                                <Link
                                    smooth={true}
                                    to={this.props.sections.Skills}
                                    activeClass={"active"}
                                    spy={true}
                                    duration={500}
                                >
                                    Skills
                                </Link>
                                <Link
                                    smooth={true}
                                    to={this.props.sections.Projects}
                                    activeClass={"active"}
                                    spy={true}
                                    duration={500}
                                >
                                    Projects
                                </Link>
                                <Link
                                    smooth={true}
                                    to={this.props.sections.Education}
                                    activeClass={"active"}
                                    spy={true}
                                    duration={500}
                                >
                                    Education
                                </Link>
                                <Link
                                    // onClick={()=> scrollToComponent(this.props.sections.Contact, {duration: 300})}
                                    to={this.props.sections.Contact}
                                    activeClass={"active"}
                                    spy={true}
                                    smooth={true}
                                    duration={500}
                                >
                                    Contact
                                </Link>
                                {/*<li*/}
                                    {/*onClick={()=> scrollToComponent(this.props.sections.Skills, {duration: 300})}>*/}
                                    {/*Skills*/}
                                {/*</li>*/}
                                {/*<li*/}

                                    {/*onClick={()=> scrollToComponent(this.props.sections.Projects, {duration: 300})}>*/}
                                    {/*Projects*/}
                                {/*</li>*/}
                                {/*<li*/}

                                    {/*onClick={()=> scrollToComponent(this.props.sections.Education, {duration: 300})}>*/}
                                    {/*Education*/}
                                {/*</li>*/}
                                {/*<li*/}

                                    {/*onClick={()=> scrollToComponent(this.props.sections.Contact, {duration: 300})}>*/}
                                    {/*Contact*/}
                                {/*</li>*/}

                            </ul>
                        </div>
                    }
                >
                    <section>
                        <image className={"app-hero-image"}>

                        </image>
                        <p>

                        </p>

                    </section>           </StickyHeader>

            </div>
        );
    }
};