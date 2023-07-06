import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Home from './pages/homepage/Home';
import MovieList from './components/movieList/MovieList';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route index element={<Home/>} ></Route>
          <Route path="movie/:id" element={<h1>Movie details</h1>} ></Route>
          <Route path="movies/:type" element={<MovieList/>} ></Route>
          <Route path="/*" element={<h1>Error page</h1>} ></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
