import { useState } from 'react'


const Display = (props) => {
  return (
    <div>
      {props.name}
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
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)
  const [points, setPoints] = useState(0)
  
  const positives = () => good/total + " %"

  return (
    <div>
      <Display text={<h1>give feedback</h1>}/>
      <Button
        handleClick={() => {
          setGood(good + 1)
          setTotal(total + 1)
          setPoints(points + 1)
        }
      }
        text='good'
      />
      <Button
        handleClick={() => {
          setNeutral(neutral + 1)
          setTotal(total + 1)
          setPoints(points + 0)
        }
      }
        text='neutral'
      />
      <Button
        handleClick={() => {
          setBad(bad + 1)
          setTotal(total + 1)
          setPoints(points - 1)
        }
      }
        text='bad'
      />
      <Display text={<h1>statistics</h1>}/>
      <Display text={good} name="good "/>
      <Display text={neutral} name="neutral "/>
      <Display text={bad} name="bad "/>
      <Display text={total} name="all "/>
      <Display text={points/total} name="average "/>
      <Display text={positives()} name="positive "/>
    </div>
  )
}

export default App