import React from 'react';
import './App.css';
import { Home, About, Contact, Navigation } from './components';
import {Route} from 'react-router-dom';

const App = () => (
  <div>
    <Route exact path="/" component ={Home}/>
    <Route exact path= "/Navigation" component ={Navigation}/>
    <Route exact path="/Navigation/About" component= {About}/>
    <Route path="/Navigation/About/Contact" component={Contact}/>
    {/* <Navigation /> */}
  </div>
);

export default App;
