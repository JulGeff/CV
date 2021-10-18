

import Banner from "./Banner";
import Home from "./pages/Home";
import Career from "./pages/Career";
import Technos from "./pages/Technos";
import Works from "./pages/Works";
import Creativity from "./pages/Creativity";
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,

} from "react-router-dom";



function App() {

        return (
          <div> 
            <Router>
                <Banner />

                <Switch>     
                  <Route exact path="/">
                    <Home />
                  </Route>  

                  <Route exact path="/parcours">
                    <Career />
                  </Route> 

                  <Route exact path="/technos">
                    <Technos />
                  </Route>    

                  <Route exact path="/works">
                    <Works />
                  </Route>    

                  <Route exact path="/creativite">
                    <Creativity />
                  </Route>          
                   
                </Switch>
            </Router>
          </div>
    ) 
    } 
  
  export default App;


