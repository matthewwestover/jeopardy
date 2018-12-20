import axios from 'axios';

const CARDS = "CARDS"
const ADD_CARD = "ADD_CARD"
const UPDATE_CARD = "UPDATE_CARD"
const DELETE_CARD = "DELETE_CARD"

// Redux Actions

export const getCards = (id, cb) => {
  return(dispatch) => {
    axios.get(`/api/categories/${id}/cards`)
      .then( res => dispatch({ type: CARDS, cards: res.data }))
      .then( cb )
  }
}

export const addCard = (id, card) => {
  return(dispatch) => {
    axios.post(`/api/categories/${id}/cards`, { card })
      .then( res => dispatch({ type: ADD_CARD, card: res.data }))
  }
}

export const updateCard = (id, card) => {
  return(dispatch) => {
    axios.put(`/api/categories/${id}/cards/${card.id}`, { card })
      .then( res => dispatch({ type: UPDATE_CARD, card: res.data }))
  }
}

export const deleteCard = (id, cardid) => {
  return(dispatch) => {
    axios.delete(`/api/categories/${id}/cards/${cardid}`)
      .then( res => dispatch({ type: DELETE_CARD, cardid }))
  }
}

// Redux Reducer
export default (state=[], action) => {
  switch(action.type) {
    case CARDS:
      return action.cards;
    case ADD_CARD:
      return [action.card, ...state];
    case UPDATE_CARD:
      return state.map( card => {
        if (card.id === action.card.id)
          return action.card
        return card
      });
    case DELETE_CARD:
      return state.filter( c => c.id !== action.cardid);
    default:
      return state;
  }
}