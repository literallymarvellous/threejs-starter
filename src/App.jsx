import { useState } from "react";
import "./App.scss";

function App() {
  return (
    <Canvas camera={{ position: [0, 0, 2], fov: 75 }}>
      <Scene />
    </Canvas>
  );
}

export default App;
