export interface ArticleItem {
  id: number;
  title: string;
  description: string;
  content: string;
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
  articles: Array<ArticleItem>
}

export interface PAGES_ACTIONS {
  setLoading: (loading: boolean) => PAGES_ACTION;
  setPage: (page: number) => PAGES_ACTION;
  addArticles: (articles: Array<ArticleItem>, reset: boolean) => PAGES_ACTION;
  setAuthor: (author: Author) => PAGES_ACTION;
}

export interface PAGES_ACTION {
  type: string;
  payload: any;
}

export type AppProps = PAGES_ACTIONS & PAGES_STATE

export interface AppState {
  hideToolbar: boolean,
  openArticleFormPopup: boolean
}