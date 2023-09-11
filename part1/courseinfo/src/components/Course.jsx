import React from 'react';
import Header from "./Header"
import Content from "./Content"
import Total from "./Total"

const Course = ({course}) => {
  let total = course.parts.reduce( (total, current) => total + current.exercises, 0);
  return (
    <div>
      <Header course={course}/>
      <Content parts={course.parts}/>
      <Total total={total}/>
    </div>
  );
};

export default Course;