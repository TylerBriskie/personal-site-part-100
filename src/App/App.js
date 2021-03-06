import React from 'react';

import Section from './Components/Section/Section';
import Home from './Components/Home/Home';
import Profile from './Components/Profile/Profile';
import Skills from './Components/Skills/Skills';
import Experience from './Components/Experience/Experience';
import Education from './Components/Education/Education';
import Projects from './Components/Projects/Projects';
import Footer from './Components/Footer/Footer';

import Contact from './Components/Contact/Contact';

import './App.scss';
import scrollToComponent from "react-scroll-to-component";

class App extends React.Component {
    sections = {
        Profile: "Profile",
        Experience: "Experience",
        Skills: "Skills",
        Education: "Education",
        Projects: "Projects",
        Contact: "Contact"
    };
    render() {
        return (
            <div className="App">
                <Home sections = {this.sections}/>

                <Profile ref={(section) => { this.sections.Profile = section; }}  sections = {this.sections} />
                <Experience ref={(section) => { this.sections.Experience = section; }}/>
                <Skills ref={(section) => { this.sections.Skills = section; }}/>
                <Projects ref={(section) => { this.sections.Projects = section; }}/>
                <Education ref={(section) => { this.sections.Education = section; }}/>
                <Contact ref={(section) => { this.sections.Contact = section; }} />

                <Footer/>
            </div>
        );
    }
}

export default App;
