import { useState } from 'react'
import Button from './components/Button'
import Statistics from './components/Statistics'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const goodFeedback = () => {
    setGood(good + 1);
  }

  const neutralFeedback = () => {
    setNeutral(neutral + 1);
  }

  const badFeedback = () => {
    setBad(bad + 1);
  }

  return (
    
    <div>
      <h1>give feedback</h1>
      <Button handleClick={goodFeedback} text={"good"} />
      <Button handleClick={neutralFeedback} text={"neutral"} />
      <Button handleClick={badFeedback} text={"bad"} />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App
