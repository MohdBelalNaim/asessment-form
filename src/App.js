import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Confirmation from './screens/Confirmation';
import First from './screens/First';
import Second from './screens/Second';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<First/>} />
        <Route path="/second" element={<Second/>} />
        <Route path="/confirmation" element={<Confirmation/>} />
      </Routes>
    </Router>
  );
}

export default App;
