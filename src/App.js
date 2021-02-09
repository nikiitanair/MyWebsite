import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/sidebar';
import Introduction from './components/introduction';
import About from './components/about';
import Expertise from './components/expertise';
import Project from './components/projects';
import Contact from './components/contact';

class App extends Component {
  render() {
    return (
      <div id="App">
        <Sidebar/>
				<Introduction></Introduction>
				<About></About>
        <Project></Project>
        <Expertise></Expertise>
        <Contact></Contact>
      </div>
    );
  }
}

export default App;