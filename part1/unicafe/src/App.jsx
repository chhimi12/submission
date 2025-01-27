// JSX template
import { useState } from 'react'
const App = () => {

  const [good, setGood] = useState(0)
  const[neutral, setNeutral] = useState(0)
  const [bad,setBad] = useState(0)
  

  return (
    
    <div>
      <h1>Give Feedback</h1>

      {/* if we just pass setGood(good + 1) here it will be rendered endlesly */}
      <Button text="good" functiona={() => setGood(good + 1)}/>
      <Button text="neutral" functiona ={() => setNeutral(neutral + 1)}/>
      <Button text="bad" functiona = {() => setBad(bad + 1)}/>
      <Statistics good={good} bad={bad} neutral={neutral}/>

    </div>
  )

  
  
}

const Statistics = ({good,bad,neutral}) => {
  
  if ((good === 0 && bad === 0 && neutral === 0 )) 
  {
    return ( 
      <p> No feedback given</p>
    )
  }
  
  return (
    <div>
    <h2>Statistics</h2>
    <table>
      <StatisticLine text="Good" value={good}/>
      <StatisticLine text="Neutral" value={neutral}/>
      <StatisticLine text="Bad" value={bad}/>
      <StatisticLine text="All" value={(bad + good + neutral)}/>
      <StatisticLine text="Average" value={(bad + good + neutral)/3}/>
      <StatisticLine text="Positive" value={(good/(bad + good + neutral)) * 100} />
    </table>
    </div>
  )

  
}

const StatisticLine = ({text, value}) => {
  return (
    
   <tr><th>{text}</th><td>{value}</td></tr>
   
  )
}


// the func needs to know what to return, if { } is used afer => we need a return  
const Button = ({ functiona, text}) => {
  return (
 <button onClick={functiona}>{text}</button> 
)
}

export default App