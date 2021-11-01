import React from 'react';
import {
  BrowserRouter as Router, Switch, Route, Link,
} from 'react-router-dom';
import Books from './components/Books/Books';
import Categories from './components/Categories/Categories';
import AddBook from './components/Books/Book/AddBook';

const App = () => (
  <div>
    <h1>Welcome to BookStore</h1>
    <Router>
      <Link to="/">Books</Link>
      <Link to="/categories">Categories</Link>
      <Switch>
        <Route path="/categories">
          <Categories />
        </Route>
        <Route exact path="/">
          <Books />
        </Route>
      </Switch>
    </Router>
    <AddBook />
  </div>
);
export default App;
