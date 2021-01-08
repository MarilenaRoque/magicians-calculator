import React, { useState } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

export default function App() {
  const [data, setData] = useState({
    total: null,
    next: null,
    operator: null,
  });

  const handleClick = buttonName => {
    const newData = calculate(data, buttonName);
    setData(newData);
  };

  const { next, total, operator } = data;
  return (
    <>
      <Display next={next ? next.toString() : '0'} total={total} operator={operator} />
      <ButtonPanel clickHandler={handleClick} />
    </>
  );
}
