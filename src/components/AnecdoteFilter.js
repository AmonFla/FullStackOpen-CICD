import React from 'react'
import { setFilter } from '../reducers/filterReducer'
import { connect } from 'react-redux'

const AnecdoteFilter = (props) => {

  const filterAnecdote = (e) => {
    props.setFilter(e.target.value)
  }

  return(
    <>filter: <input onChange={filterAnecdote} /></>
  )

}


export default connect(null, { setFilter })(AnecdoteFilter)