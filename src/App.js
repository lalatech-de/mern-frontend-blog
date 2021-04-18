import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes, Route } from "react-router-dom";


import HomePage from './pages/HomePage';

function App() {
  return (
    <Router>
      <div className="App">
      <Routes>
        <Route path='/' element={<HomePage/>}/>
      </Routes>
      </div>
    </Router>
  );
}

export default App;
