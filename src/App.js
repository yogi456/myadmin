import React from 'react';
//import logo from './logo.svg';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom'
import login from './pages/login'
import { Dashboard } from './pages/Dashboard'
import faclogin from './pages/faclogin';
import Authenticate from './media/Components/Authenticate';
function App() {
  return (
 <Switch> 
   <Route exact path="/">
   <Authenticate>
   <Dashboard />
   </Authenticate>
  
   </Route>
<Route exact path="/login" component={ login } />
<Route exact path="/user" component={ faclogin } />
<Route path="*" render={()=> "404 not found"} />
 </Switch>
  );
}

export default App;
