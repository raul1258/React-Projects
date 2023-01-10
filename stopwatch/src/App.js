import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from "react";

function App() {

  const [hour, setHour] = useState(0);
  const [min, setMin] = useState(0);
  const [sec, setSec] = useState(0);
  const [minsec, setMinSec] = useState(0);
  const [stop, setStop] = useState(false);

  const handleStart = () => {
    setStop(true);
  };
  const handleReset = () => {
    setHour(0);
    setMin(0);
    setSec(0);
    setMinSec(0);
  };
  const handlePause = () => {
    setStop(false);
  };

  useEffect(() => {
    let interval = null;
    if (stop) {
      interval = setInterval(() => {
        if (min > 59) {
          setHour(hour + 1);
          setMin(0);
          clearInterval(interval);
        }
        if (sec > 59) {
          setMin(min + 1);
          setSec(0);
          clearInterval(interval);
        }
        if (minsec > 99) {
          setSec(sec + 1);
          setMinSec(0);
          clearInterval(interval);
        }
        if (minsec <= 99) {
          setMinSec(minsec + 1);
        }
      }, 1);
    } else {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  });

  return (
    <div className="App">
      <h1>Stopwatch</h1>
      <h1>
        {hour}:{min}:{sec}:{minsec}
      </h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handlePause}>Pause</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default App;
