import { useState } from 'react'
import Button from './components/Button'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0));
   
  const [selected, setSelected] = useState(getRandomIndex (anecdotes))

  function handleNextQuote () {
    let nextIndex = getRandomIndex (anecdotes);
    while (nextIndex === selected) {
      nextIndex = getRandomIndex (anecdotes);
    }
    setSelected(nextIndex);
  }

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  }

  function getRandomIndex (arr) {
    let max = arr.length
    return getRandomInt(0, max);
  }

  function handleVote () {
    let newVotes = [...votes];
    newVotes[selected] += 1;
    setVotes(newVotes);
  }

  let maxIndex = 0;
  let maxVotes = 0;
  for (let i=0; i < anecdotes.length; i ++) {
    let curVotes = votes[i];
    if (curVotes > maxVotes) {
      maxVotes = curVotes;
      maxIndex = i;
    }
  }


  return (
    <div>
      <h1>Anecdote of the day</h1>
      <div>
        {anecdotes[selected]}
      </div>
      <div>
        Has {votes[selected]} votes
      </div>
      <div>
        <Button text={"vote"} handleClick={handleVote} />
        <Button text={"next anecdote"} handleClick={handleNextQuote} />
      </div>
      <h1>Anecdote with most votes</h1>
      <div>
        {anecdotes[maxIndex]}
      </div>
      <div>
        Has {maxVotes} votes
      </div>
    </div>
  )
}

export default App