import React, { Component } from 'react'
import loding  from './loading.gif'

export default class Spinner extends Component {
  render() {
    return (
      <div className='loading text-center loading-white bg-white text-dark'>
         <img src={loding} alt="loading"  />
      </div>
    )
  }
}
