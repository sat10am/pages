import { PAGES_STATE, PAGES_ACTION } from '../types'
import { SET_LOADING, SET_PAGE, ADD_ARTICLES, SET_AUTHOR, SHOW_APPBAR } from "./actions";

const initialState : PAGES_STATE = {
  author: {
    id: 0,
    name: ''
  },
  loading: false,
  page: 1,
  articles: [],
  appBarHeight: '64px',
  appBarShowing: true,
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
        articles: action.meta.reset ? action.payload : state.articles.concat(action.payload)
      }
    case SET_AUTHOR:
      return {
        ...state,
        author: action.payload,
      }
    case SHOW_APPBAR:
      return {
        ...state,
        appBarShowing: action.payload,
      }
    default:
      return state
  }
}

export default rootReducer;