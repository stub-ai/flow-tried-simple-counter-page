import { useState, useEffect } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch('/api/counter')
      .then(response => response.json())
      .then(data => setCount(data.value));
  }, []);

  const increment = () => {
    fetch('/api/increment', { method: 'POST' })
      .then(response => response.json())
      .then(data => setCount(data.value));
  };

  const decrement = () => {
    fetch('/api/decrement', { method: 'POST' })
      .then(response => response.json())
      .then(data => setCount(data.value));
  };

  return (
    <div className="flex items-center justify-center space-x-4">
      <button
        className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-700 active:bg-blue-800 focus:outline-none"
        onClick={increment}
      >
        Increase
      </button>
      <button
        className="px-4 py-2 text-white bg-red-500 rounded hover:bg-red-700 active:bg-red-800 focus:outline-none"
        onClick={decrement}
      >
        Decrease
      </button>
      <span className="text-xl">{count}</span>
    </div>
  );
};

export default Counter;