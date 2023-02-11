import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { newsAction } from '../redux/news/newsAction'

export default function HooksNews () {
  const count = useSelector( state => state.count );
  const dispatch = useDispatch();
  return (
    <div className='container'>
        <h1>Total number of News</h1>
        <h1>Total number of News - {count}</h1>
        <button type="button" onClick={ ()=> { dispatch(newsAction())} }>Add News</button>
    </div>
  )
}