import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import AnecdotesListContainer from './../../components/AnecdotesListContainer'

test('renders content', () => {
  const anecdotes = [
    {
      id: 1,
      content: 'If it hurts, do it more often',
      votes: 14
    },
    {
      id: 2,
      content: 'Adding manpower to a late software project makes it later!',
      votes: 5
    }
  ]

  const vote = jest.fn()

  const component = render(
    <AnecdotesListContainer anecdotes={anecdotes} vote={vote}/>
  )

  expect(component.container).toHaveTextContent(
    'If it hurts, do it more often'
  )
})