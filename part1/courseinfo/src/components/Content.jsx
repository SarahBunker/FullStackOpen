import React from 'react';
import Part from './Part';

const Content = ({parts}) => {
  let content = parts.map( part => <Part part={part} key={part.name}/>);

  return (
    content
  );
};

export default Content;