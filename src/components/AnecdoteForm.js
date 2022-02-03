import React from 'react'
import { connect }   from 'react-redux'
import { newAnecdote } from '../reducers/anecdoteReducer'
import { setNotificacion } from '../reducers/notificationReducer'
import AnecdoteFormContainer from './AnecdoteFormContainer'

const AnecdoteForm = (props) => {

  const NewAnecdote = async (value) => {
    props.newAnecdote(value.anecdote)
    props.setNotificacion(`Added anecdote '${value}'`,5)

  }
  return(
    <AnecdoteFormContainer NewAnecdote={NewAnecdote} />
  )
}

export default connect (null, { newAnecdote, setNotificacion })(AnecdoteForm)