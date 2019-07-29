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

                    <ul className="Header_links">
                        <li className="Header_link">Web Developer</li>
                        <li className="Header_link">Musician</li>
                        <li className="Header_link">About</li>
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