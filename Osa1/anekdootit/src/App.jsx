import { useState } from 'react'

const Display = (props) => {
  return (
    <div>
      {props.text}
    </div>
  )
}

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
}


const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)

  const [votes, setVotes] = useState(new Uint8Array(8))

  const maxVotes = () => Math.max(...votes)

  const indexMax = () =>{
    const max = maxVotes()
    return votes.indexOf(max)
  } 

  const getRandomInt = (min, max) => {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min) + min)
  }

  return (
    <div>
      <Display text={<h1>Anecdote of the day</h1>}/>
      <Display text={anecdotes[selected]}/>
      <Display text={"has "+votes[selected]+" votes"}/>
      <Button
        handleClick={() => {
          const copy = [...votes]
          copy[selected] += 1
          setVotes(copy)

        }
      }
        text='vote'
      />
      <Button
        handleClick={() => {
          setSelected(getRandomInt(0, anecdotes.length))
        }
      }
        text="next anecdote"
      />
    <Display text={<h1>Anecdote with most votes</h1>}/>
    <Display text={anecdotes[indexMax()]}/>
    <Display text={"has "+maxVotes()+" votes"}/>
    </div>
  )
}

export default App