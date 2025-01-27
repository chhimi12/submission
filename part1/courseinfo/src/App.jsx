// Unfortunately, the entire application is in the same component. Refactor the code so that it consists of three new components: 
// Header, Content, and Total. All data still resides in the App component, which passes the necessary data to each component using props.
//  Header takes care of rendering the name of the course, 
// Content renders the parts and their number of exercises and Total renders the total number of exercises.

const Header = (props) => {
  console.log(props)
  return (
    <h1>{props.course}</h1>

  )

}

// when we pass something as a prop it is wrapped inside another object called the prop
// eg. the array itslef is not passed but a prop object that holds the array is passed 
const Content = (props) => {
  const items = props.parts
  return (
    
    <div>
      <Part part={items[0].name} exercise={items[0].exercises} />
      <Part part={items[1].name} exercise={items[1].exercises} />
      <Part part={items[2].name} exercise={items[2].exercises} />
    
    </div>
    
  )

}

const Part = (props) => {
  return (
    <p>{props.part} {props.exercise} </p>
  )
}


const Total = (props) => { return (
  <p>Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</p>

)

}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }


  return ( 
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />

    </div>
  
  )
}

export default App