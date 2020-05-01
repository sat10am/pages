export interface ArticleItem {
  id: number;
  title: string;
  description: string;
  url: string
  created_at: string
}

export interface Author {
  id: number;
  name: string;
}

export interface PAGES_STATE {
  author: Author;
  loading: false;
  page: number;
  articles: Array<ArticleItem>,
  appBarHeight: string,
  appBarShowing: boolean,
}

export interface PAGES_ACTIONS {
  setLoading: (loading: boolean) => PAGES_ACTION;
  setPage: (page: number) => PAGES_ACTION;
  addArticles: (articles: Array<ArticleItem>) => PAGES_ACTION;
  truncateArticles: () => PAGES_ACTION; 
  setAuthor: (author: Author) => PAGES_ACTION;
  showAppBar: (show: boolean) => PAGES_ACTION;
}

export interface PAGES_ACTION {
  type: string;
  payload?: any;
}

export type AppProps = PAGES_ACTIONS & PAGES_STATE

export interface AppState {
}