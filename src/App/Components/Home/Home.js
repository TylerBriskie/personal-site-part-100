import React, {Component} from 'react';
import './Home.scss';
import 'react-sticky-header/styles.css';
import StickyHeader from 'react-sticky-header';
import {Link, animateScroll as scroll } from 'react-scroll';

export default class Home extends Component {
    scrollToTop = () => {
        scroll.scrollToTop();
    };
    render(){
        return(
            <div className={"App-Home"}>
                <StickyHeader
                    // This is the sticky part of the header.
                    header={
                        <div className="Header_root">
                            <h1 className="Header_title" onClick={this.scrollToTop}>TYLER BRISKIE</h1>
                            <p>Web Developer.</p>
                            <Link className={"call-to-action"}
                                activeClass={"active"}
                                to={"Experience"}
                                spy={true}
                                smooth={true}
                                offset={-100}
                                duration={350}
                            >
                                Nice To Meet You
                            </Link>

                            <ul className="Header_links">
                                <Link activeClass={"active"}
                                      to={"Experience"}
                                      spy={true}
                                      smooth={true}
                                      offset={-100}
                                      duration={350}>
                                    Experience
                                </Link>
                                <Link activeClass={"active"}
                                      to={"Skills"}
                                      spy={true}
                                      smooth={true}
                                      offset={-100}
                                      duration={350}>
                                    Skills
                                </Link>
                                <Link activeClass={"active"}
                                      to={"Projects"}
                                      spy={true}
                                      smooth={true}
                                      offset={-100}
                                      duration={350}>
                                    Projects
                                </Link>
                                <Link activeClass={"active"}
                                      to={"Education"}
                                      spy={true}
                                      smooth={true}
                                      offset={-100}
                                      duration={350}>
                                    Education
                                </Link>
                                <Link activeClass={"active"}
                                      to={"Contact"}
                                      spy={true}
                                      smooth={true}
                                      offset={-100}
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