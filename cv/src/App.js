import React from "react"
import Header from "./components/Header";
import Profile from "./components/Profile";
import Experience from "./components/Experience";
import Skills from "./components/Skills"
import Education from "./components/Education";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div className='App' style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
       <Header />
      <Profile />
      <Experience />
      <Skills />
      <Education />
      <Projects />
      <Contact />
    </div>
  );
}
   

export default App;