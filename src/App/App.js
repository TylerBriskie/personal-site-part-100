import React from 'react';
import logo from '../logo.svg';
import './App.scss';
import Header from './Components/Header/Header.js';
import Footer from './Components/Footer/Footer.js';

function App() {
  return (
    <div className="App">
      <Header />

      <section>
        <h1>HERES CONTENT</h1>
        <p>Yes! I am a citizen! Now which way to the welfare office? I'm kidding, I'm kidding. I work, I work. You don't win friends with salad. When I held that gun in my hand, I felt a surge of power…like God must feel when he's holding a gun.</p>
        <p>Dad didn't leave… When he comes back from the store, he's going to wave those pop-tarts right in your face! I'm a Spalding Gray in a Rick Dees world. Hi. I'm Troy McClure. You may remember me from such self-help tapes as "Smoke Yourself Thin" and "Get Some Confidence, Stupid!"</p>
        <p>And now, in the spirit of the season: start shopping. And for every dollar of Krusty merchandise you buy, I will be nice to a sick kid. For legal purposes, sick kids may include hookers with a cold. Look out, Itchy! He's Irish!</p>
      </section>

      <Footer />
    </div>
  );
}

export default App;
