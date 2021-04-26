// built in & packages
// import { useState } from 'react';
import { Switch, Route } from "react-router-dom";
import Particles from 'react-particles-js';
// components
import Navigation from './components/navigation/Navigation';
// pages
import SearchPage from './components/pages/SearchPage'
// styles
import './styles/styles.css';

const particles = {
  particles: {
    line_linked: {
      shadow: {
        enable: true,
        color: "#3ca9d1",
        blur: 5
      }
    }
  }
}

function App() {

  return (
    <>
    <Particles params={particles} className="particles"/>
      <Navigation />
      <div className="container">
        <Switch>
          <Route path="/spells">
            <SearchPage category="spells" />
          </Route>
          <Route path="/monsters">
            <SearchPage category="monsters" />
          </Route>
          <Route path="/">
              <div>box</div>
          </Route>
        </Switch>
      </div>
      {/* <div className="container-2">
      <Switch>
          <Route path="/spells">
            <SearchPage category="spells" />
          </Route>
          <Route path="/monsters">
            <SearchPage category="monsters" />
          </Route>
          <Route path="/">
            
          </Route>
        </Switch>
      </div> */}
    </>
  );
}

export default App;