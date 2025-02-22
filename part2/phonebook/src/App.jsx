import { useState, useEffect } from 'react'
import numbersService from './services/numbers'
import Notification from './components/Notifications'
import axios from 'axios'
import { Button } from 'react-native-web'

// fix the displahy of notification depdeing ont he kind of message
// depending on if the event is sucessful or not
const App = () => {
  const [persons, setPersons] = useState([
  ]) 

  const [newName, setNewName] = useState('')
  const [newNumber,setNewNumber] = useState('')
  const [search, setSearch] = useState('')
  const [confirmation, setConfirtmation] = useState({ message: null, type: null })
  // we set the inital vlaue of confirmation to be an object 


// continually updates what is pulled from the server on each refreh  
  const  hook = () => {
  numbersService.getAll().then(
    response => {
      setPersons(response.data)
    }
  )
}

useEffect(hook,[])

  const remove = (id,name) => {

    if (window.confirm("Do you really want to delete this phone number? ")) {
    numbersService.remove(id).catch(
      error => {
        setConfirtmation({message:`Information on ${name} has already been removed from the server.`,type:'negative'})
        setTimeout(() => {
          setConfirtmation({ message: null, type: null })
        }, 5000)     
      }
    )
    setConfirtmation({message:`Information on ${name} has been removed from the server.`,type:'positive'})
        setTimeout(() => {
          setConfirtmation({ message: null, type: null })
        }, 5000) 

    const new_list = persons.filter(person => person.id !== id )
    setPersons(new_list)

    }
  }
  
 
 const handelNameChange = (event) => {
  setNewName(event.target.value)
 }

 const handelNumberChange = (event) => {
  setNewNumber(event.target.value)

 }

  
  const addDetail = (event) => {
    
    event.preventDefault()
    
    if (persons.some(person => (person.name === newName && person.number === newNumber))) {

      alert(`${newName} is already there`);

    } 
    else if (persons.some(person => person.name === newName && person.number !== newNumber)) {
   
      if (window.confirm(`${newName} is already added to the phonebook, would you like to replace the old number with a new one?`)) {
        const person_object = persons.find(person => person.name === newName )
        const changePhone = { ...person_object, number : newNumber}

        numbersService.update(changePhone.id,changePhone).then( response => setPersons(persons.map(
          (p) => (p.id === person_object.id ? response.data : p))
          
      
        ))
        
        setConfirtmation({message:`you have sucessfull changed the number for ${newName}`,type:'positive'})
        setTimeout(() => {
          setConfirtmation({ message: null, type: null })
        }, 5000)
        
      }
    }
    else {
      // person is added here by createting a person object that uses other state

    const new_persons= {
          name: newName,
          number: newNumber
    }

    numbersService.create(new_persons).then(response => {
      setPersons(persons.concat(response.data))
      setNewName('') // EMPTY THE INPUT FIELD
      setNewNumber('')
    })

    
    setConfirtmation({message:`you have sucessfull Added ${newName}`,type:'positive'})
    setTimeout(() => {
      setConfirtmation({ message: null, type: null })
    }, 5000)
    
   
    }
    
}

const handelSearch = (event) => {
  setSearch(event.target.value)
}



  return (
  
    <div>
      {/* This is what renders the confirmation message  */}
      {/* The confirmation message changes based on what triggers it  */}
      <Notification message={confirmation.message} type={confirmation.type}/>  
      <h2>Phonebook</h2>
      {/* Filter shown with <input value={search} onChange={handelSearch}/> */}
      <Filter search_item={search} funct={handelSearch} />

      <h2>Add a new</h2>
      <PersonForm submit_action={addDetail} name_Change={handelNameChange} number_Change={handelNumberChange} newName={newName} newNumber={newNumber}/>
      

     
      <h2>Numbers</h2>
      {/* we passed remove as a fucntion here, to deal with out of scope compoenent issue  */}
      <Search persons={persons} search={search} remove={remove}/>

     
    </div>
  )
}



const Search = ({persons,search,remove}) => {
  const result = persons.filter(person => person.name.toLowerCase().includes(search.toLowerCase()))

  return ( 
    <ul>{result.map(person => <li key={person.id}>{person.name} {person.number}   <button onClick ={() => remove(person.id , person.name)}> Delete </button> </li>)} </ul>
  )
}

const Filter = ({search_item,funct}) => {
  return (
    <div>
      Filter shown with <input value={search_item} onChange={funct}/>
    </div>
    
  )

}

const PersonForm = ({submit_action,name_Change,number_Change,newName,newNumber}) => {
  return (
   <div>
   <form onSubmit={submit_action}>
     <div>
       name: <input value={newName} onChange={name_Change}/>
       <br></br>
       Number: <input value={newNumber} onChange={number_Change}/>
     </div>
 
   <div>
     <button type="submit">add</button>
   </div>
   </form>
   </div>
  ) 
 
   
 }
 







export default App