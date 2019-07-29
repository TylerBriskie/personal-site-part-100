import React from 'react';
import './Home.scss';
import 'react-sticky-header/styles.css';
import StickyHeader from 'react-sticky-header';

const Home = () => {

    return <div className={"App-Home"}>
        <StickyHeader
            // This is the sticky part of the header.
            header={
                <div className="Header_root">
                    <h1 className="Header_title"> TYLER BRISKIE</h1>
                    <p>Web Developer.</p>
                    <a href={'#Resume'}><button>Nice to meet you</button></a>
                    <ul className="Header_links">
                        <a href={'#Experience'}><li className="Header_link">Experience</li></a>
                        <a href={'#Skills'}><li className="Header_link">Skills</li></a>
                        <a href={'#Projects'}><li className="Header_link">Projects</li></a>
                        <a href={'#Education'}><li className="Header_link">Education</li></a>
                        <a href={'#Contact'}><li className="Header_link">Contact</li></a>


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
};

export default Home;