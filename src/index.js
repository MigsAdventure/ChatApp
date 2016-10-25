import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import './socket-init';

import Layout from './components/Layout';
import MainPage from './components/MainPage';
import InsideRoom from './components/InsideRoom';
import './stores/ChatStore';

render(
  <Router history={browserHistory}>
    <Route path='/' component={Layout}>
      <IndexRoute component={MainPage} />
      <Route path='chatrooms/:id' component={InsideRoom} />
    </Route>
  </Router>,
  document.getElementById('root')
);
