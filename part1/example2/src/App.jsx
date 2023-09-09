import { useState } from 'react'
import Display from './components/Display'
import Button from './components/Button'

const App = () => {
  const [ counter, setCounter ] = useState(0)

  const increaseByOne = () => setCounter(counter + 1)
  const setToZero = () => setCounter(0)
  const decreaseByOne = () => setCounter(counter - 1)

  return (
    <div>
      <Display counter={counter}/>
      <Button handleClick={decreaseByOne} text={"- 1"} />
      <Button handleClick={setToZero} text={"zero"} />
      <Button handleClick={increaseByOne} text={"+ 1"} />
      
    </div>
  )
}

export default App