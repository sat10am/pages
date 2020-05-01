import { ArticleItem, Author } from "../types";

export const SET_LOADING = 'SET_LOADING';
export const SET_PAGE = 'SET_PAGE';
export const ADD_ARTICLES = 'ADD_ARTICLES';
export const SET_AUTHOR = 'SET_AUTHOR';

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

export function addArticles(articles: Array<ArticleItem>, reset: boolean) {
  return {
    type: ADD_ARTICLES,
    payload: articles,
    meta: reset
  }
}

export function setAuthor(author: Author) {
  return {
    type: SET_AUTHOR,
    payload: author
  }
}