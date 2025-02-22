import Course from "./componenets/Course"

const App = () => {
  const courses = [{
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 12,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 140,
        id: 3
      },
      
    ]
  },
  {
    name: 'Node.js',
    id: 2,
    parts: [
      {
        name: 'Routing',
        exercises: 3,
        id: 1
      },
      {
        name: 'Middlewares',
        exercises: 7,
        id: 2
      }
    ]
  },
  
]


  return (
  <div>
    <h1>Web devlopment curriculum</h1>
    
    {/* we need a componenet that will access the coruses and the prevous two componenet will be isnide that */}
    <Courses courses={courses} />

    {/* <Summ parts={course.parts}/> */}
  </div>)


}

const Courses = ({courses}) => {
  // it should use the map function to return each item will be passed down to the other comps
 
  return (
    <div>
      {courses.map(course => 
        <Course key={course.id} course={course} />
      )}
    </div>
  )
}



export default App