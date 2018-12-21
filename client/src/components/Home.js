import React from 'react';
import { Header, Icon } from 'semantic-ui-react';

const Home = () => (
  <Header icon textAlign="center">
    <Header.Content style={{ display: "flex", }}>
      <Icon name='gem' color="red" size="large" circular inverted />
      <Icon name='game' color="violet" size="massive" circular inverted />
      <Icon name='gem' color="red" size="large" circular inverted />
    </Header.Content>
    <br />
    Welcome To Matt's Jeoparody Game
    <Header.Subheader>Home of the original non-functioning jeopardy game.</Header.Subheader>
  </Header>
);

export default Home;