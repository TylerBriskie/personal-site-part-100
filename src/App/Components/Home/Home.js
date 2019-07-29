import React from 'react';
import './Home.scss';
import 'react-sticky-header/styles.css';
import StickyHeader from 'react-sticky-header';

const Home = () => {

    function scrollToProfile(){
        console.log('i am scrolling');
    }
    return <div className={"App-Home"}>
        <StickyHeader
            // This is the sticky part of the header.
            header={
                <div className="Header_root">
                    <h1 className="Header_title"> TYLER BRISKIE</h1>
                    <p>Web Developer.</p>
                    <button onClick={scrollToProfile}>Nice to meet you</button>
                    <ul className="Header_links">
                        <li className="Header_link">WEB DEVELOPER</li>
                        <li className="Header_link">MUSICIAN</li>
                        <li className="Header_link">ABOUT</li>
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