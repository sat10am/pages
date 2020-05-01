import React from 'react';
import './App.css';
import PagesAppBar from './PagesAppBar';
import ArticleList from './ArticleList'
import Container from '@material-ui/core/Container';
import axios from 'axios'
import { AppProps, AppState, ArticleItem } from '../types'
import ArticleForm from './ArticleForm'
import { setLoading } from '../reducers/actions';

class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props)

    this.state = {
      hideToolbar: false,
      openArticleFormPopup: false,
    }

    this.addArticle = this.addArticle.bind(this)
    this.calculateContainerPaddingTop = this.calculateContainerPaddingTop.bind(this)
    
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

      const {hideToolbar} = this.state
      if (!hideToolbar && htmlEl.scrollTop > 64) {
        this.setState({ hideToolbar : true })
      } else if (hideToolbar && htmlEl.scrollTop <= 64) {
        this.setState({hideToolbar: false})
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
    
    setLoading(true)
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

  calculateContainerPaddingTop() {
    // const node = ReactDom.findDOMNode(this.appBarRef) as Element
    const appBar = document.querySelector('#AppBar')
    if (appBar) {
      return appBar.getBoundingClientRect().height;
    }

    return 0
  }
  
  render() {
    const { author, loading, articles} = this.props
    const { hideToolbar, openArticleFormPopup } = this.state

    return (
      <div className="App">
        <PagesAppBar 
          loading={loading} 
          hideToolbar={hideToolbar} 
          onClickAdd={this.setOpenArticleFormPopup}></PagesAppBar>
        <Container style={{ paddingTop: this.calculateContainerPaddingTop() }}>
          <ArticleList 
            list={articles} 
          ></ArticleList>
        </Container>
        <ArticleForm
          authorName={author.name}
          openModal={openArticleFormPopup}
          onClickAdd={this.onClickAddArticle}
        />
      </div>
    ); 
  }
}

export default App;
