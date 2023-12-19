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

export default Course