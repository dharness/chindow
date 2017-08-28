import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';
import Landing from './views/landing/Landing'
import './styles'

const App = () => (
  <Switch>
    <Route exact path='/' component={Landing} />
    <Route path='/about' component={()=>{}} />
    <Route path='/contact' component={()=>{}} />
  </Switch>
)

ReactDOM.render((
  <BrowserRouter>
    <div>
      <Route path="/" component={App}>
      </Route>
    </div>
  </BrowserRouter>
), document.getElementById('root'))


registerServiceWorker();
