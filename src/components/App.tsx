import React from 'react';
import './App.css';
import AppBar from './AppBar';
import ArticleList from './ArticleList'
import axios from 'axios'
import { AppProps, AppState } from '../types'
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props)


    this.onClickAddArticle = this.onClickAddArticle.bind(this)
    
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

  updatePage(reset: boolean = false) {
    const {loading, page, setLoading, setPage, addArticles } = this.props
    if (loading) {
      return;
    }

    setLoading(true)
    axios.get(`https://pages.sat10am.now.sh/api/articles?page=${page}`)
      .then(({ data }) => {
        addArticles(data, reset)
        setPage(page + 1)
      })
      .catch(() => {
      }).finally(() => {
        setLoading(false)
      })
  }

  setOpenArticleFormPopup(open: boolean) {
    this.setState({
      openArticleFormPopup: open
    })
  }

  onClickAddArticle(name: string, url: string) {
    const { author, loading, setLoading } = this.props

    if (loading) {
      return;
    }
    
    setLoading(true);

    (author.id ? Promise.resolve() : this.registerAuthor(name))
      .then(() => this.addArticle(url))
      .finally(() => {
        setLoading(false)
      })
  }

  registerAuthor(name: string) {
    const { setAuthor } = this.props
    return axios.post(`https://pages.sat10am.now.sh/api/author`, {
      name
    }).then(({ data }) => {
      setAuthor(data)
    }).catch(() => {

    })
  }

  addArticle(url: string) {
    const { author } = this.props
    axios.post(`https://pages.sat10am.now.sh/api/urls`, {
      author: author.id,
      url,
    })
      .then(() => {
        this.updatePage(true)
      }).catch(() => {
      })
  }

  render() {
    const { author, appBarShowing, loading, articles } = this.props
    
    return (
      <div className="App">
        <AppBar showing={appBarShowing} loading={loading} />
        <ArticleList 
          showPaddingTop={appBarShowing}
          list={articles}
        ></ArticleList>
        <Fab color="secondary" aria-label="add" className={`fabButton ${appBarShowing ? '' : 'hidden'}`}>
          <AddIcon />
        </Fab>
      </div>
    ); 
  }
}

export default App;
