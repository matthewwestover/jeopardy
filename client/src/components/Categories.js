import React from 'react';
import CategoryForm from './CategoryForm';
import Category from './Category';
import { connect, } from 'react-redux';
import { Container, Header, Button, List, Icon, } from 'semantic-ui-react';

class Categories extends React.Component {
  state = { showForm: false, };

  toggleForm = () => {
    this.setState( state => {
      return { showForm: !state.showForm };
    })
  }

  render() {
    const { showForm } = this.state;
    return(
      <Container>
        <Header as='h2' textAlign="center">Categories</Header>
        <Button onClick={this.toggleForm}>
        { showForm ? 'Hide Form' : 'Show New Category Form' }
        </Button>
        <br />
        <br />
        {
          showForm ?
            <CategoryForm closeForm={this.toggleForm} />
          :
            <List divided relaxed>
              { this.props.categories.map( c => (
                <Category {...c} />
              ))}
            </List>
        }
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return { categories: state.categories, };
}

export default connect(mapStateToProps)(Categories);
