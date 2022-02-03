import React, { useState } from 'react'

const AnecdoteFormContainer = ({ NewAnecdote }) => {
  const [anecdote, setAnecdote] = useState('')

  const onSubmit = (e) => {
    e.preventDefault()
    NewAnecdote({ anecdote })
    setAnecdote('')

  }

  return(
    <>
      <h2>create new</h2>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={anecdote}
          name="anecdote"
          id="anecdote"
          placeholder="Add New"
          onChange = {({ target }) => setAnecdote(target.value)}
        />
        <button type="submit">create</button>
      </form>
    </>
  )
}

export default AnecdoteFormContainer