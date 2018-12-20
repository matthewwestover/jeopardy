import React from 'react';
import { Header, Icon } from 'semantic-ui-react';

const Home = () => (
  <Header as='h2' icon textAlign="center">
    <Icon name='gem' color="red" size="large" circular inverted />
    <Icon name='game' color="violet" circular inverted />
    <Icon name='gem' color="red" size="large" circular inverted />
    Welcome To Matt's Jeoparody Game
    <Header.Subheader>Home of the original non-functioning jeopardy game.</Header.Subheader>
  </Header>
);

export default Home;