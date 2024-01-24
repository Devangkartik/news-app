import React, { Component } from 'react'

export default class NewsIteam extends Component {

render() {
    let {title,description,newsUrl,imageUrl,time,author} = this.props
    return (
        <>
        <div className='my-5'>
            <div className="card">
                <img src={imageUrl?imageUrl:"https://dnd2oi6izkvoi.cloudfront.net/2023/08/26/image/jpeg/KCPzxW1cF99rLfkfm8XtoEHq0ht0sF3Vgjpl6Q4r.jpg"} className="card-img-top" alt="..."/>
                <div className="card-body">?
                  <h5 className="card-title">{title}</h5>
                  <p className="card-text">{description}</p>
                  <p>Published At {new Date(time).toGMTString()} By {author}</p>
                  <a href={newsUrl} target="_blank"  rel="noreferrer" className="btn btn-sm btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>  
      </>
    )
  }
}
