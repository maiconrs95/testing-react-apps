// simple test with ReactDOM
// http://localhost:3000/counter

import * as React from 'react'
import {act} from 'react-dom/test-utils'
import {createRoot} from 'react-dom/client'
import Counter from '../../components/counter'

// NOTE: this is a new requirement in React 18
// https://reactjs.org/blog/2022/03/08/react-18-upgrade-guide.html#configuring-your-testing-environment
// Luckily, it's handled for you by React Testing Library :)
global.IS_REACT_ACT_ENVIRONMENT = true

beforeEach(() => {
  document.body.innerHTML = ''
})

test('counter increments and decrements when the buttons are clicked', () => {
  const div = document.createElement('div')
  // 🐨 create a div to render your component to (💰 document.createElement)

  // 🐨 append the div to document.body (💰 document.body.append)
  document.body.append(div)

  // 🐨 use createRoot to render the <Counter /> to the div
  const root = createRoot(div)

  act(() => {
    root.render(<Counter />)
  })

  const [decrement, increment] = div.querySelectorAll('button')

  const message = div.firstChild.querySelector('div')

  expect(message.textContent).toBe('Current count: 0')

  act(() => increment.click())
  expect(message.textContent).toBe('Current count: 1')

  act(() => decrement.click())
  expect(message.textContent).toBe('Current count: 0')

  // div.remove() - look at beforeEach
})

/* eslint no-unused-vars:0 */
