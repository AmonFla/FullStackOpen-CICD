import React from 'react'
import { connect } from 'react-redux'
import { voteAnecdote } from '../reducers/anecdoteReducer'
import { setNotificacion } from '../reducers/notificationReducer'
import AnecdotesListContainer from './AnecdotesListContainer'

const AnecdoteList = (props) => {



  const vote = async (id) => {
    const anecdote = props.anecdotes.find(a => a.id === id)
    const modifiedEntry = { ...anecdote, votes: anecdote.votes + 1 }
    props.voteAnecdote(modifiedEntry)
    props.setNotificacion(`you voted '${anecdote.content}'`,5)
  }

  return(
    <AnecdotesListContainer anecdotes={props.anecdotes} vote={vote}/>
  )
}

const mapStateToProps = (state) => {
  return {
    anecdotes: state.anecdotes
      .filter(a => a.content.includes(state.filter))
      .sort((a, b) => a.votes < b.votes ? 1 : -1)
  }
}
export default connect(mapStateToProps, { voteAnecdote,setNotificacion })(AnecdoteList)