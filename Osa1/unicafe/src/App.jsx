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

const StatisticLine = (props) => {
  return (
    <div>
      {props.name}
      {props.value}
    </div>
  )
}

const Statistics = (props) => {
  const positives = () => props.good/props.total*100 + " %"
  const average = () => props.points/props.total

  if (props.total === 0) {
    return (
      <div>
        <Display text={<h1>statistics</h1>}/>
        <Display text={"No feedback given"}/>
      </div>
    )
  }
  return (
    <div>
      <Display text={<h1>statistics</h1>}/>
      <StatisticLine value={props.good} name="good "/>
      <StatisticLine value={props.neutral} name="neutral "/>
      <StatisticLine value={props.bad} name="bad "/>
      <StatisticLine value={props.total} name="all "/>
      <StatisticLine value={average()} name="average "/>
      <StatisticLine value={positives()} name="positive "/>
    </div>
  )
}


const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)
  const [points, setPoints] = useState(0)

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
      <Statistics
      good={good}
      neutral={neutral}
      bad={bad}
      total={total}
      points={points}
      />
    </div>
  )
}

export default App