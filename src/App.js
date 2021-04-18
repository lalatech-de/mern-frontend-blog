import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes, Route } from "react-router-dom";


import HomePage         from './pages/HomePage';
import AboutPage        from './pages/AboutPage';
import ArticlesListPage from './pages/ArticlesListPage';
import ArticlePage      from './pages/ArticlePage';
import NavBar           from './pages/NavBar';
import NotFoundPage     from './pages/NotFoundPage';


function App() {
  return (
    <Router>
      <div className="App">
        <NavBar/>
        <div id="page-body">
          <Routes>
            <Route path='/'              element={<HomePage/>}/>
            <Route path='/about'         element={<AboutPage/>}/>
            <Route path='/articles'      element={<ArticlesListPage/>}/>
            <Route path='/article/:name' element={<ArticlePage/>}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
