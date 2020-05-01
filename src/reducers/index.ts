import { PAGES_STATE, PAGES_ACTION } from '../types'
import { SET_LOADING, SET_PAGE, ADD_ARTICLES } from "./actions";

const initialState : PAGES_STATE = {
  loading: false,
  page: 1,
  articles: []
}

function rootReducer(state = initialState, action : PAGES_ACTION) {
  switch(action.type) {
    case SET_LOADING:
      return {
        ...state,
        loading: action.payload
      }
    case SET_PAGE:
      return {
        ...state,
        page: action.payload
      }
    case ADD_ARTICLES: 
      return {
        ...state,
        articles: state.articles.concat(action.payload)
      }
    default:
      return state
  }
}

export default rootReducer;