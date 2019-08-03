import React, {Component} from 'react';
import './Home.scss';
import 'react-sticky-header/styles.css';
import StickyHeader from 'react-sticky-header';
import {Link, animateScroll as scroll, scrollSpy } from 'react-scroll';
import scrollToComponent from 'react-scroll-to-component';

export default class Home extends Component {
    componentDidMount() {
        console.log('Home props', this.props);
        scrollToComponent(this.Home, { offset: 0, align: 'middle', duration: 2000, ease:'inCirc'});
    }
    scrollToTop = () => {
        scroll.scrollToTop();
    };
    goToSkills = () => {
        var element = document.getElementById("Skills-Section");

        element.scrollIntoView();
    }

    render(){
        return(
            <div className={"App-Home"}>
                <StickyHeader ref={(section) => { this.Home = section; }}
                    // This is the sticky part of the header.
                    header={
                        <div className="Header_root">
                            <h1 className="Header_title" onClick={()=> scrollToComponent(this.Home, {})}>TYLER BRISKIE</h1>
                            <p>Web Developer.</p>
                            <Link className={"call-to-action"}
                                activeClass={"active"}
                                to={"Profile"}
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={350}
                            >
                                Nice To Meet You
                            </Link>

                            <ul className="Header_links" >
                                {/*<button onClick={() => scrollToComponent(this.Profile, { offset: 0, align: 'top', duration: 1500})}>Go To Profile</button>*/}
                                <Link
                                    onClick={() => scrollToComponent(this.props.sections.Profile, { offset: 0, align: 'top', duration: 350})}
                                    // activeClass={"active"}
                                    //   to={"Profile"}
                                    //   spy={true}
                                    //   smooth={true}
                                    //   offset={0}
                                    //   duration={350}
                                >
                                    Profile
                                </Link>
                                <Link activeClass={"active"}
                                      to={"Experience"}
                                      spy={true}
                                      smooth={true}
                                      offset={0}
                                      duration={350}>
                                    Experience
                                </Link>
                                <Link activeClass={"active"}
                                      to={"Skills"}
                                      spy={true}
                                      smooth={true}
                                      offset={0}
                                      duration={350}
                                        onSetActive={this.goToSkills}>
                                    Skills
                                </Link>
                                <Link activeClass={"active"}
                                      to={"Projects"}
                                      spy={true}
                                      smooth={true}
                                      offset={0}
                                      duration={350}>
                                    Projects
                                </Link>
                                <Link activeClass={"active"}
                                      to={"Education"}
                                      spy={true}
                                      smooth={true}
                                      offset={0}
                                      duration={350}>
                                    Education
                                </Link>
                                <Link activeClass={"active"}
                                      to={"Contact"}
                                      spy={true}
                                      smooth={true}
                                      offset={0}
                                      duration={350}>
                                    Contact
                                </Link>


                            </ul>
                        </div>
                    }
                >
                    <section>
                        <image className={"app-hero-image"}>

                        </image>
                        <p>

                        </p>

                    </section>
                </StickyHeader>

            </div>
        );
    }
};