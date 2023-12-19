const HeaderMain = ({ title }) => <h1>{title}</h1>

const Header = ({ name }) => <h2>{name}</h2>

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

const Courses = ({ courses }) =>
  <>
    {courses.map(course =>
      <Course key={course.id} course={course} />
     )}
  </>


const App = () => {
  const courses = [
    {
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
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
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
    }
  ]

  return (
    <div>
      <HeaderMain title="Web development curriculum" />
      <Courses courses={courses} />
    </div>
  )
}

export default App