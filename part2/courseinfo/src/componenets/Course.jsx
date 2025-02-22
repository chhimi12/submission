
// we cannot directly render objects so we must use map to access them items in the object
const Course = ({course}) => {
    console.log(course)
    let total = course.parts.reduce((sum,part) => { return sum + part.exercises},0)
    return (
      <div>
         <h1>{course.name}</h1>
         <div>{course.parts.map(
          
          part => <p key={part.id}> {part.name} {part.exercises} </p>
        
        )
          
          }</div>
        <b> Total of {total} exercises</b>
      </div>
     
    )
  
  }

  export default Course
  // to show the sum we will need to add up all the exercises which are attrubtes of an object 
  // we can just loop thru the parts and add each of the exercise 