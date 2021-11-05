import React from 'react';
import {
  BrowserRouter as Router, Switch, Route,

} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/configureStore';
import Books from './components/Books/Books';
import Categories from './components/Categories/Categories';
import Navigation from './components/Navigation/Navigation';

const App = () => (
  <Provider store={store}>
    <div className="border border-red-500 w-full h-full ">
      <Router>
        <Navigation />
        <Switch>
          <Route path="/categories">
            <Categories />
          </Route>
          <Route exact path="/">
            <Books />
          </Route>
        </Switch>
      </Router>
    </div>
  </Provider>
);
export default App;
