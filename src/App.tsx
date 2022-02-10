import { Canvas } from '@react-three/fiber';
import React, { Suspense, useState } from 'react';
import './App.css';
import Home from './pages/Home';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Canvas style={{ backgroundColor: 'black' }}>
        <Suspense fallback={null}>
          <Home />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default App;
