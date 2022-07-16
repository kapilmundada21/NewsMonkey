import React, { Component } from 'react'
import loading from './loading.jpg'

export default class Spinner extends Component {
  render() {
    return (
      <div className='text-center'>
        <img className="my-3" src={loading} alt="loading" height="5%" width="5%"></img>
      </div>
    )
  }
}
