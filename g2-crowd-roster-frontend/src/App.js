import React from 'react';
import { render } from 'react-dom';
import App from './components/App';

var ReactRouter = require('react-router-dom');
var IndexRoute = ReactRouter.IndexRoute;
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;


const  router = (
<Router>
  <div className="container">
    <Route path='/' component={App}/>
     
    </div>
  </Router>
)
render(router, document.getElementById('root'));

export default App;
