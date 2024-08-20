import React from "react"
import Header from "./components/Header";
import Profile from "./components/Profile";
import Experience from "./components/Experience";
import Skills from "./components/Skills"
import Education from "./components/Education";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
 import SignIn from "./components/SignIn";
  import SignUp from "./components/SignUp";
  import { BrowserRouter as Router, Routes, Link, Route } from "react-router-dom";
 
 // App component
function App() {
  return (
    <Router>
      <div className="App" style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
        <Header />
        <nav>
          <Link to="/">Home</Link> | <Link to="/signin">Sign In</Link> | <Link to="/signup">Sign Up</Link>
        </nav>
        <Routes>
          <Route path="/" exact>
            <Profile />
            <Experience />
            <Skills />
            <Education />
            <Projects />
            <Contact />
          </Route>
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;