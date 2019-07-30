import React from 'react';
import './App.scss';
// import Header from './Components/Header/Header.js';
import Home from './Components/Home/Home.js';
import Footer from './Components/Footer/Footer.js';
import Section from './Components/Section/Section.js';
import Skills from './Components/Skills/Skills.js';
import Contact from './Components/Contact/Contact';
function App() {
  return (
    <div className="App">
      {/*<Header />*/}
      <Home />
      {/*<Resume />*/}
      {/*<Projects />*/}
      {/*<Music />*/}
      {/*<AppContainer />*/}

        <Section sectionName={"Profile"} >
          <section>
              <h1>LANDING PAGE</h1>
              <button>call to action</button>

              <p>And now, in the spirit of the season: start shopping. And for every dollar of Krusty merchandise you buy, I will be nice to a sick kid. For legal purposes, sick kids may include hookers with a cold. Look out, Itchy! He's Irish!</p>
          </section>
        </Section>
        <Section sectionName={"Experience"} theme={"dark"}>
            <section>
                <h1>Resume</h1>

                <p>And now, in the spirit of the season: start shopping. And for every dollar of Krusty merchandise you buy, I will be nice to a sick kid. For legal purposes, sick kids may include hookers with a cold. Look out, Itchy! He's Irish!</p>
            </section>
        </Section>
        <Skills />
    <Section sectionName={"Projects"}>

        <section>
            <h1>Projects PAGE</h1>
            <button>call to action</button>

            <p>And now, in the spirit of the season: start shopping. And for every dollar of Krusty merchandise you buy, I will be nice to a sick kid. For legal purposes, sick kids may include hookers with a cold. Look out, Itchy! He's Irish!</p>
        </section>
    </Section>
    <Section sectionName={"Education"}>
        <section>
            <h1>Education PAGE</h1>
            <button>call to action</button>
            <p>And now, in the spirit of the season: start shopping. And for every dollar of Krusty merchandise you buy, I will be nice to a sick kid. For legal purposes, sick kids may include hookers with a cold. Look out, Itchy! He's Irish!</p>
        </section>
    </Section>
    <Section sectionName={"Contact"}>
        <section>
            <Contact />



        </section>
    </Section>


        <Footer />
    </div>
  );
}

export default App;
