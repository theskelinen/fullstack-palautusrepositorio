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
      {props.loki}
    </button>
  )
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Display text={<h1>give feedback</h1>}/>
      <Button
        handleClick={() => setGood(good + 1)}
        text='good'
      />
      <Button
        handleClick={() => setNeutral(neutral + 1)}
        text='neutral'
      />
      <Button
        handleClick={() => setBad(bad + 1)}
        text='bad'
      />
      <Display text={<h1>statistics</h1>}/>
      <Display text={good} name="good "/>
      <Display text={neutral} name="neutral "/>
      <Display text={bad} name="bad "/>
    </div>
  )
}

export default App