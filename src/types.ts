export interface ArticleItem {
  title: string;
  thumbnail: string;
  content: string;
  url: string
}

export interface PAGES_STATE {
  loading: false;
  page: number;
  articles: Array<ArticleItem>
}

export interface PAGES_ACTIONS {
  setLoading: (loading: boolean) => PAGES_ACTION;
  setPage: (page: number) => PAGES_ACTION;
  addArticles: (articles: Array<ArticleItem>, reset: boolean) => PAGES_ACTION;
}

export interface PAGES_ACTION {
  type: string;
  payload: any;
}

export type AppProps = PAGES_ACTIONS & PAGES_STATE

export interface AppState {
  hideAppBar: boolean
}