import React, { Component } from 'react'
import NewsIteam from './NewsIteam'
import Spinner from './Spinner';
import propTypes from 'prop-types'

export default class Newsbar extends Component {

static defaultProps = {
    country : "in",
    pageSize : 6,
    category : "general"
}
static propTypes = {
  country : propTypes.string,
  pageSize : propTypes.number,
  category : propTypes.string
}
  constructor(){
    super();
   this.state = {
      articles : [],
      loading : true,
      page : 1
   }
  }  
  
    async componentDidMount(){
      let url = `https://newsapi.org/v2/top-headlines?&country=${this.props.country}&category=${this.props.category}&apiKey=bff9b9e9de7f413db21c70db363f5e41&page=${this.state.page}&pageSize=${this.props.pageSize}`
     this.setState({loading:true})
      let rawData = await fetch(url);
      let parseData = await rawData.json();
      console.log(parseData);
      this.setState({
        articles : parseData.articles,
        loading : false,
        totalResults : parseData.totalResults
      })
     }
    
     handleNextClick = async () =>{
      let url = `https://newsapi.org/v2/top-headlines?&country=${this.props.country}&category=${this.props.category}&apiKey=bff9b9e9de7f413db21c70db363f5e41&page=${this.state.page+1}&pageSize=${this.props.pageSize}`
      this.setState({loading:true})
      let rawData = await fetch(url);
      let parseData = await rawData.json();
      console.log(parseData);
      this.setState({
        articles : parseData.articles,
        page : this.state.page + 1,
        loading : false
      })
     }
     handlePrevClick = async () =>{
      let url = `https://newsapi.org/v2/top-headlines?&country=${this.props.country}&category=${this.props.category}&apiKey=bff9b9e9de7f413db21c70db363f5e41&page=${this.state.page-1}&pageSize=${this.props.pageSize}`
     this.setState({loading:true})
      let rawData = await fetch(url);
      let parseData = await rawData.json();
      console.log(parseData);
      this.setState({
        articles : parseData.articles,
        page : this.state.page - 1,
        loading : false,
      })
     }

  render() {
   
    return (
        <>
        <div className='container my-3'>
          <h1 className="text-center my-3" style={{margin : '40px 0px'}}>Mindfresh-NewsArticles</h1>
          {this.state.loading && <Spinner/>}
           <div className="row">
           {!this.state.loading && this.state.articles.map((element)=>{
              return <div className="col-md-4" key={element.url} >
                     <NewsIteam title={element.title ? element.title:""} description={element.description ? element.description:""}
                      newsUrl={element.url} imageUrl={element.urlToImage} time={element.publishedAt} author={element.author?element.author:"Unknown"} />
               </div>
              })}
           </div>
           <div className="container d-flex justify-content-between">
           <button disabled={this.state.page <= 1 } type="button" className="btn btn-primary justify-content-around btn-sm " onClick={this.handlePrevClick}>&larr; Previous</button>
          <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.state.pageSize)} type="button" className="btn btn-primary justify-content-around btn-sm"  onClick={this.handleNextClick}>Next &rarr;</button>
          </div> 
        </div>
      </>
    ) 
  }
}
