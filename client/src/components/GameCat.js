import React from 'react';
import { connect, } from 'react-redux';
import { Container, Header, Segment, } from 'semantic-ui-react';


class GameCat extends React.Component {
  render() {
    const { id, name, description } = this.props.categories;
    return(
      <Container>
        <Header as='h1' textAlign="center">Jeoparody!</Header>
        <hr />
        <br />
        {
          this.props.categories.map( c => (
            <Segment>
              <Header as="h2" textAlign="center">
              <Header.Content>{c.name}</Header.Content>
              <Header.Subheader textAlign="center">{c.description}</Header.Subheader>
              </Header>
              {/* <GameCardFetch catId={c.id}  />  */}
            </Segment>
          ))
        }
      </Container>
    )
  }
}




const mapStateToProps = (state) => {
  return { categories: state.categories, };
}

export default connect(mapStateToProps)(GameCat);