import React from 'react';
import './App.css';
import PagesAppBar from './PagesAppBar';
import ArticleList from './ArticleList'
import axios from 'axios'
import { AppProps, AppState } from '../types'

class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props)

    this.state = {
      hideAppBar: false 
    }

    this.addArticle = this.addArticle.bind(this)
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

      const {hideAppBar} = this.state
      if (!hideAppBar && htmlEl.scrollTop > 64) {
        this.setState({ hideAppBar : true })
      } else if (hideAppBar && htmlEl.scrollTop <= 64) {
        this.setState({hideAppBar: false})
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
    axios.get(`http://localhost:49765/api?page=${(page - 1)}`)
      .then(({ data }) => {
        addArticles(data, reset)
        setPage(page + 1)
      })
      .catch(() => {
        addArticles([{
          url: 'www.naver.com',
          thumbnail: '../logo.svg',
          title: 'title',
          content: 'fdksjafkldsjflkdsjflksdjffdksjafkldsjflkdsjflksdjffdksjafkldsjflkdsjflksdjffdksjafkldsjflkdsjflksdjffdksjafkldsjflkdsjflksdjffdksjafkldsjflkdsjflksdjf'
        }, {
          url: 'www.naver.com',
          thumbnail: '../logo.svg',
          title: 'title',
          content: 'fdksjafkldsjflkdsjflksdjf'
        }, {
          url: 'www.naver.com',
          thumbnail: '../logo.svg',
          title: 'title',
          content: 'fdksjafkldsjflkdsjflksdjf'
        }, {
          url: 'www.naver.com',
          thumbnail: '../logo.svg',
          title: 'title',
          content: 'fdksjafkldsjflkdsjflksdjf'
        }, {
          url: 'www.naver.com',
          thumbnail: '../logo.svg',
          title: 'title',
          content: 'fdksjafkldsjflkdsjflksdjffdksjafkldsjflkdsjflksdjffdksjafkldsjflkdsjflksdjffdksjafkldsjflkdsjflksdjffdksjafkldsjflkdsjflksdjffdksjafkldsjflkdsjflksdjf'
        }, {
          url: 'www.naver.com',
          thumbnail: '../logo.svg',
          title: 'title',
          content: 'fdksjafkldsjflkdsjflksdjf'
        }, {
          url: 'www.naver.com',
          thumbnail: '../logo.svg',
          title: 'title',
          content: 'fdksjafkldsjflkdsjflksdjf'
        }, {
          url: 'www.naver.com',
          thumbnail: '../logo.svg',
          title: 'title',
          content: 'fdksjafkldsjflkdsjflksdjf'
        }, {
          url: 'www.naver.com',
          thumbnail: '../logo.svg',
          title: 'title',
          content: 'fdksjafkldsjflkdsjflksdjf'
        }, {
          url: 'www.naver.com',
          thumbnail: '../logo.svg',
          title: 'title',
          content: 'fdksjafkldsjflkdsjflksdjf'
        }, {
          url: 'www.naver.com',
          thumbnail: '../logo.svg',
          title: 'title',
          content: 'fdksjafkldsjflkdsjflksdjf'
        }, {
          url: 'www.naver.com',
          thumbnail: '../logo.svg',
          title: 'title',
          content: 'fdksjafkldsjflkdsjflksdjffdksjafkldsjflkdsjflksdjffdksjafkldsjflkdsjflksdjffdksjafkldsjflkdsjflksdjffdksjafkldsjflkdsjflksdjffdksjafkldsjflkdsjflksdjf'
        }, {
          url: 'www.naver.com',
          thumbnail: '../logo.svg',
          title: 'title',
          content: 'fdksjafkldsjflkdsjflksdjf'
        }, {
          url: 'www.naver.com',
          thumbnail: '../logo.svg',
          title: 'title',
          content: 'fdksjafkldsjflkdsjflksdjf'
        }, {
          url: 'www.naver.com',
          thumbnail: '../logo.svg',
          title: 'title',
          content: 'fdksjafkldsjflkdsjflksdjf'
        }, {
          url: 'www.naver.com',
          thumbnail: '../logo.svg',
          title: 'title',
          content: 'fdksjafkldsjflkdsjflksdjf'
        }, {
          url: 'www.naver.com',
          thumbnail: '../logo.svg',
          title: 'title',
          content: 'fdksjafkldsjflkdsjflksdjf'
        }], reset)

        setPage(page + 1)
      }).finally(() => {
        setLoading(false)
      })
  }

  refreshArticles() {
    
  }

  addArticle(url: string) {
    const { loading, setLoading } = this.props
    if (loading) {
      return;
    }  

    setLoading(true)
    axios.post(`localhost:3333`, {
      url,
    })
      .then(() => {
        this.updatePage(true)
      }).catch(e => {
      }).finally(() => {
        setLoading(false)
      })
  }
  
  render() {
    const { loading, articles} = this.props

    return (
      <div className="App">
        <PagesAppBar loading={loading} hideAppBar={this.state.hideAppBar} onClickAdd={this.addArticle}></PagesAppBar>
        <ArticleList 
          list={articles} 
        ></ArticleList>
      </div>
    ); 
  }
}

export default App;
