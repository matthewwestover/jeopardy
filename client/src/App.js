import React, { Fragment, } from 'react';
import Home from './components/Home';
import NoMatch from './components/NoMatch';
import Navbar from './components/Navbar';
import FetchCategories from './components/FetchCategories';
import { Container, } from 'semantic-ui-react';
import { Route, Switch, } from 'react-router-dom';


const App = () => (
  <Fragment>
    <Navbar />
    <Container>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/categories' component={FetchCategories} />
        <Route component={NoMatch} /> 
      </Switch>
    </Container>
  </Fragment>
);

export default App;