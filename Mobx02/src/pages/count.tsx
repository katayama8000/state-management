import { observer } from 'mobx-react';
import { NextPage } from 'next';
import React from 'react';
import { countStore } from '../state/count';

const Count: NextPage = observer(() => {
  const { count, doubleCount, increment, decrement } = countStore;
  return (
    <div>
      <h1>Mobx</h1>
      <h2>カウント</h2>
      <p>{count}</p>
      <h2>カウントの2倍</h2>
      <p>{doubleCount}</p>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>
    </div>
  );
});

export default Count;
