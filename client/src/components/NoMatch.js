import React from 'react';
import { Link, } from 'react-router-dom';
import { Header, Icon } from 'semantic-ui-react';

const Home = () => (
  <Header as='h2' icon textAlign="center">
    <Icon name='gem' color="red" size="large" circular inverted />
    <Icon name='game' color="violet" circular inverted />
    <Icon name='gem' color="red" size="large" circular inverted />
    <Header.Subheader>Look dumbass, this isn't a functional page. Go {' '}<Link to="/">Home</Link>.</Header.Subheader>
  </Header>
);

export default Home;