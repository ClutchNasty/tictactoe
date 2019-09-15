import React from 'react';
import { Route, Switch, } from 'react-router-dom'
import Home from "./components/Home"
import Game from "./components/Game"

const App = () => (
 
 <>
 
 <Switch>
   <Route exact path= "/" component={Home} />
   <Route exact path= "/game" component={Game} />
   {/* <Route component={NoMatch}/> */}
</Switch>
</>

)


export default App;
