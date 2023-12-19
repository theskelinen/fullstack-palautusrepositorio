const Header = ({ name }) => <h1>{name}</h1>

const Total = ({ sum }) => <p><b>total of {sum} exercises</b></p>

const Content = ({ parts }) => {
  const totalAmount = parts.reduce((sum, part) => sum + part.exercises, 0)
  
  return(
  <>
    {parts.map(part =>
      <Part key={part.id} part={part} />
     )}
    <Total sum={totalAmount}
    />
  </>
  )
}

const Part = ({ part }) => 
  <p>
    {part.name} {part.exercises}
  </p>

const Course = ({ course }) =>
  <>
    <Header
     name={course.name}
    />
    <Content
     parts={course.parts}
    />
  </>

const App = () => {
  const course = {
    name: 'Half Stack application development',
    id: 1,
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return (
    <div>
      <Course course={course} />
    </div>
  )
}

export default App