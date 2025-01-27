import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  // create an state that has an array 
  const [votes, setVotes] = useState([Array(anecdotes.length).fill(0)])

  let randomNumber = () => Math.floor(Math.random() * anecdotes.length)
  console.log(selected)

  // to vote for each of the anecdotes we need a an array to count the votes
 

  // a function that will increment a vote by 1 
  // it will be passed the random number that was generated
  
  const addVote = (index) => {

    const copy_of_votes = { ...votes }
    copy_of_votes[0][index] += 1 ;
    setVotes(copy_of_votes)
    console.log(copy_of_votes[0])
  }
  // to find the most votes

  let max = 0 
  let max_index = 0 
  for (let i = 0 ; i < votes[0].length; i ++ ){
    
    if (votes[0][i] >= max )
    {
      max = votes[0][i]
      max_index = i 
    }

    console.log(max)
  }
 

  return (
    <div>
      <h1> Anecdote of the day </h1>
      {anecdotes[selected]} <br></br> has {votes[0][selected]} votes
      <br></br>
      <Button text="Next" funct={() => setSelected(randomNumber)}/>
      <Button text="Vote" funct={() => addVote(selected)}/>
      <h1> Anecdote with the most votes </h1>
      {anecdotes[max_index]} has {votes[0][max_index]} votes.
      

    </div>
  )

  
}

// it should render the text that it contains, and it should also be passed the function that is executed when it is pressed 
const Button = ({text, funct}) => {

  return (
    // the componenet will display name of the button and there will nbe soemthing when the button is clicked 
    <button onClick={funct}>{text}</button>
    
    
  )

}



export default App