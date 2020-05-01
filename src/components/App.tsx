import React from 'react';
import './App.css';
import AppBar from './AppBar';
import ArticleList from './ArticleList'
import axios from 'axios'
import { AppProps, AppState } from '../types'
import UrlFormDialog from './UrlFormDialog';

class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props)
    
    this.onClickSubmit = this.onClickSubmit.bind(this)

    document.onscroll = () => {
      const htmlEl = document.querySelector('html')

      if (!htmlEl) {
        return;
      }

      const scrollHeight = htmlEl.scrollHeight;
      const scrollPos = htmlEl.scrollTop + htmlEl.clientHeight
      // fire if the scroll position is 300 pixels above the bottom of the page
      if((scrollPos >= (scrollHeight - 100)) || scrollHeight === 0){
        this.updatePage()
      }

      const {appBarShowing, showAppBar} = this.props
      if (appBarShowing && htmlEl.scrollTop > 64) {
        showAppBar(false)
      } else if (!appBarShowing && htmlEl.scrollTop <= 64) {
        showAppBar(true)
      }
    }
  }

  componentDidMount() {
    this.updatePage()
  }

  updatePage() {
    const {loading, page, setLoading, setPage, addArticles } = this.props
    if (loading) {
      return;
    }

    setLoading(true)
    axios.get(`https://pages.sat10am.now.sh/api/articles?page=${page + 1}`)
      .then(({ data }) => {
        addArticles(data)
        setPage(page + 1)
      })
      .catch(() => {
      }).finally(() => {
        setLoading(false)
      })
  }

  onClickSubmit(authorName: string, url: string) {
    const { author, loading, setLoading } = this.props

    if (loading) {
      return
    }

    setLoading(true);

    ((author.name && author.name === authorName) ? Promise.resolve() : this.registerAuthor(authorName))
      .then(() => this.submitUrl(url))
      .finally(() => setLoading(false))
  }

  registerAuthor(name: string) {
    const { setAuthor } = this.props

    return axios.post(`https://pages.sat10am.now.sh/api/author`, {
      name
    })
    .then(({ data }) => {
      return setAuthor(data)
    })
    .catch(() => {
    })
  }

  submitUrl(url: string) {
    const { author, truncateArticles } = this.props
    return axios.post(`https://pages.sat10am.now.sh/api/urls`, {
      author: author.id,
      url: url
    }).then(() => {
      truncateArticles()
      this.updatePage()
    }).catch(() => {

    })
  }

  render() {
    const { appBarShowing, loading, articles, author } = this.props
    
    return (
      <div className="App">
        <AppBar showing={appBarShowing} loading={loading} />
        <ArticleList 
          showPaddingTop={appBarShowing}
          list={articles}
        ></ArticleList>
        <UrlFormDialog 
          appBarShowing={appBarShowing}
          authorName={author.name}
          onClickSubmit={this.onClickSubmit}
        />
      </div>
    ); 
  }
}

export default App;
