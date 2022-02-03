import React from 'react'

const AnecdotesListContainer = ({ anecdotes, vote }) => {

  return(
    <>
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
              has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      )}
    </>)
}

export default AnecdotesListContainer