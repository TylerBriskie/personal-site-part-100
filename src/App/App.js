import React from 'react';
import './App.scss';
// import Header from './Components/Header/Header.js';
import Home from './Components/Home/Home.js';
import Footer from './Components/Footer/Footer.js';
import Section from './Components/Section/Section.js';

function App() {
  return (
    <div className="App">
      {/*<Header />*/}
      <Home />
      {/*<Resume />*/}
      {/*<Projects />*/}
      {/*<Music />*/}
      {/*<Contact />*/}
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
    <Section sectionName={"Skills"}>
        <section>
            <h1>SKEELZ</h1>
            <h6>Are you for real?</h6>
            <h4>Groupie</h4>
            <p>Dad didn't leave… When he comes back from the store, he's going to wave those pop-tarts right in your face! I'm a Spalding Gray in a Rick Dees world. Hi. I'm Troy McClure. You may remember me from such self-help tapes as "Smoke Yourself Thin" and "Get Some Confidence, Stupid!"</p>
            <h5>This is an H5 ipsum</h5>
            <p>And now, in the spirit of the season: start shopping. And for every dollar of Krusty merchandise you buy, I will be nice to a sick kid. For legal purposes, sick kids may include hookers with a cold. Look out, Itchy! He's Irish!</p>
        </section>
    </Section>
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
            <h3>Want to get in touch?</h3>
            <a href="mailto:tylerbriskie@gmail.com"><h4>tylerbriskie@gmail.com</h4></a>


        </section>
    </Section>


        <Footer />
    </div>
  );
}

export default App;
