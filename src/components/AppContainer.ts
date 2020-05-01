import { connect } from "react-redux";
import { Dispatch } from "redux"
import { setLoading, setPage, addArticles, setAuthor, showAppBar } from "../reducers/actions";
import App from "./App";
import { PAGES_STATE, ArticleItem, Author } from '../types'

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    setLoading: (loading: boolean) => dispatch(setLoading(loading)),
    setPage: (page: number) => dispatch(setPage(page)),
    addArticles: (articles: Array<ArticleItem>, reset: boolean) => dispatch(addArticles(articles, reset)),
    setAuthor: (author: Author) => dispatch(setAuthor(author)),
    showAppBar: (show: boolean) => dispatch(showAppBar(show))
  };
};

const mapStateToProps = (state: PAGES_STATE) => {
  return state;
};

export default connect(mapStateToProps, mapDispatchToProps)(App);