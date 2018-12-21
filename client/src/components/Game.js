import React from 'react';
import GameCatFetch from './GameCatFetch';
import { connect } from 'react-redux';

class Game extends React.Component {
  state = { score: 0, };


  render() {
    return(
      <GameCatFetch />
    )
  }
}

export default connect()(Game);