import React from 'react';
import StatisticLine from './StatisticLine';

const Statistics = ({good, neutral, bad}) => {
  let count = good + neutral + bad;
  if (!count) return (
    <>
      <h1>Statistics</h1>
      <p>No feedback given</p>
    </>
  )
  let total = good - bad;
  let average = count ? total / count : 0;
  let perPos = count ? good / count * 100 : 0;
    <table>
      <tr>
        <th>Statistics</th>
      </tr>
    </table>
  return (
    <table>
      <thead>
        <tr>
          <th>Statistics</th>
        </tr>
      </thead>
      <tbody>
        <StatisticLine text="good"     value={good} />
        <StatisticLine text="neutral"  value={neutral} />
        <StatisticLine text="bad"      value={bad} />
        <StatisticLine text="all"      value={count} />
        <StatisticLine text="average"  value={average} />
        <StatisticLine text="positive" value={perPos} afterText={"%"}/>
      </tbody>
    </table>
  );
};

export default Statistics;