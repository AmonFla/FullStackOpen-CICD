import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react'

import AnecdoteFormContainer from './../../components/AnecdoteFormContainer'

// ...

describe('Send Anecdote', () => {

  it('calls onSubmit function with correct arguments when a valid form is submitted', async () => {

    const NewAnecdote = jest.fn()

    const component = render(
      <AnecdoteFormContainer NewAnecdote={NewAnecdote} />
    )

    const input = component.container.querySelector('#anecdote')
    const form = component.container.querySelector('form')


    fireEvent.change(input, {
      target: { value: 'New Anecdote' }
    })

    fireEvent.submit(form)

    expect(NewAnecdote.mock.calls).toHaveLength(1)
    expect(NewAnecdote.mock.calls[0][0].anecdote).toBe('New Anecdote')
  })
})
