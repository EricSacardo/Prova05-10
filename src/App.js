import React from 'react';
import LandingPage from './Pages/LandingPage.jsx';
import Page404 from './Pages/Page404.jsx';
import { BrowserRouter, Switch, Route, Link} from 'react-router-dom';


function App() {
  return (
    <div>
      <BrowserRouter>
      <Switch>
          <Route path="/" exact component={LandingPage}/>
          <Route path='*' component={Page404} />
         
       </Switch>
      </BrowserRouter>
  
    </div>
  );
} 


export default App;
