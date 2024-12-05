
import './App.css';
import "bootstrap/dist/css/bootstrap.css"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import MovieView from './MovieView';

function App() {
  return (
    <div>
      <Router>
        <h2>Movies</h2>
        <Routes>
          <Route path='/' element={<MovieView />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
