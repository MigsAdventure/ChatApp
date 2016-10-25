import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import './socket-init';

import Layout from './components/Layout';
import MainPage from './components/MainPage';


render(
  <Router history={browserHistory}>
    <Route path='/' component={Layout}>
      <IndexRoute component={MainPage} />
      <Route path='chatrooms' component={ChatRooms} />
      {/* <Route path='favorites' component={FavoritesPage} />
      <Route path='watchList' component={WatchList} /> */}
    </Route>
  </Router>,
  document.getElementById('root')
);