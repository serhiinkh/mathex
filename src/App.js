import './App.css';
import Expression from './Expression';
import Confetti from 'react-confetti'
import { useState } from 'react';
import useWindowSize from 'react-use/lib/useWindowSize'

function App() {

  const [showConfetti, setShowConfetti] = useState(false);
  const { width, height } = useWindowSize()
  const expressions = Array.from({ length: 10 }).map((_, i) => {
    return <Expression key={i} onCorrect={() => setShowConfetti(true)} />
  })

  return (
    <div className="App">
      <Confetti
        width={width}
        height={height}
        style={{ pointerEvents: 'none' }}
        numberOfPieces={showConfetti ? 500 : 0}
        recycle={false}
        onConfettiComplete={confetti => {
          confetti.reset()
          setShowConfetti(false);
        }}
      />
      <header className="App-header">
        {expressions}
      </header>
    </div>
  );
}

export default App;
