import React from 'react';
import { Link, Route, BrowserRouter, Switch } from 'react-router-dom'
import Origin from './components/Origin'
import Ingredients from './components/Ingredients'
import Similar from './components/Similar'
import Cancer from './components/Cancer'
import Floats from './components/Floats'
import Rootbeer from './rootbeer.png'
import Cap from './cap.png'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <img className="mugs"src={Rootbeer} alt="rootbeer mugs"/>
        <p className="title">Root Beer Fun Facts</p>
        <br/>
        <Link className="links" to="/Origin"><img className="cap" src={Cap} alt="bottlecap"/> Origin of Rootbeer</Link>
        <br/>
        <Link className="links" to="/Ingredients"><img className="cap" src={Cap} alt="bottlecap"/> Common Ingredients</Link>
        <br/>
        <Link className="links" to="/Similar"><img className="cap" src={Cap} alt="bottlecap"/> Drinks Similar to Root Beer</Link>
        <br/>
        <Link className="links" to="/Cancer"><img className="cap" src={Cap} alt="bottlecap"/> Does Root Beer Cause Cancer?</Link>
        <br/>
        <Link className="links" to="/Floats"><img className="cap" src={Cap} alt="bottlecap"/> Vanilla Ice Cream: <br/>
        the Unofficial Sidekick of Root Beer</Link>
        <Switch>
          <Route path="/Origin" component ={Origin}/>
          <Route path="/Ingredients" component ={Ingredients}/>
          <Route path="/Similar" component={Similar} />
          <Route path="/Cancer" component={Cancer} />
          <Route path="/Floats" component={Floats}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
