import React from 'react';

const StatisticLine = ({text, value, afterText}) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}{afterText}</td>
    </tr>
    // <p>{text} {value}{afterText}</p>
  );
};

export default StatisticLine;