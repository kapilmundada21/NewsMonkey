import React from 'react'
import { connect } from 'react-redux'
import { newsAction } from '../redux/news/newsAction'

const NewsRedux = (props) => {
  return (
    <div className='container'>
        <h1>Total number of News - {props.count} </h1>
        <h1>Total number of News - {props.count} </h1>
        <button onClick={props.newsAction}>Add News</button>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    count : state.count
  }
}

const mapDispatchToProps = dispatch => {
  return {
    newsAction : () => dispatch(newsAction())
  }
}

export default connect( mapStateToProps, mapDispatchToProps)(NewsRedux)