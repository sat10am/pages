import { ArticleItem, Author } from "../types";

export const SET_LOADING = 'SET_LOADING';
export const SET_PAGE = 'SET_PAGE';
export const ADD_ARTICLES = 'ADD_ARTICLES';
export const TRUNCATE_ARTICLES = 'TRUNCATE_ARTICLES';
export const SET_AUTHOR = 'SET_AUTHOR';
export const SHOW_APPBAR = 'SHOW_APPBAR';

export function setLoading(loading: boolean) {
  return {
    type: SET_LOADING,
    payload: loading
  }
}

export function setPage(page: number) {
  return {
    type: SET_PAGE,
    payload: page
  }
}

export function addArticles(articles: Array<ArticleItem>) {
  return {
    type: ADD_ARTICLES,
    payload: articles
  }
}

export function truncateArticles() {
  return {
    type: TRUNCATE_ARTICLES
  }
}

export function setAuthor(author: Author) {
  return {
    type: SET_AUTHOR,
    payload: author
  }
}

export function showAppBar(show: boolean) {
  return {
    type: SHOW_APPBAR,
    payload: show
  }
}