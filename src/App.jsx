

import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(intervalId); // очистка при размонтировании
  }, []);

  return (
    <>
      <h1>Current Time</h1>
      <div className="card">
        <p style={{ fontSize: '1.5rem' }}>{time}</p>
      </div>
    </>
  );
}

export default App;

