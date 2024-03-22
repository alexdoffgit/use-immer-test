import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useImmerReducer } from 'use-immer'

const initialState = { count: 0, input: '' }

const ACTION = {
  INCREMENT: 'increment',
  DECREMENT: 'decrement',
  RESET: 'reset',
  EDIT: 'edit'
}

function reducer(draft, action) {
  switch(action.type) {
    case ACTION.INCREMENT:
      draft.count++
      break
    case ACTION.DECREMENT:
      draft.count--
      break
    case ACTION.RESET:
      draft.count = 0
      break
    case ACTION.EDIT:
      draft.input = action.payload
      break
    default:
      throw new Error(`action ${action.type} not found!!!`)
  }
}

function App() {
  const [state, dispatch] = useImmerReducer(reducer, initialState)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <div>count is {state.count}</div>
        <div>
          <p>{state.input}</p>
          <input type="text" onChange={(e) => dispatch({ type: ACTION.EDIT, payload: e.target.value })}/>
        </div>
        <button onClick={() => dispatch({ type: ACTION.INCREMENT })}>+</button>
        <button onClick={() => dispatch({ type: ACTION.DECREMENT })}>-</button>
        <button onClick={() => dispatch({ type: ACTION.RESET })}>reset</button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
