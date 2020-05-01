import { ArticleItem } from "../types";

export const SET_LOADING = 'SET_LOADING';
export const SET_PAGE = 'SET_PAGE';
export const ADD_ARTICLES = 'ADD_ARTICLES';

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