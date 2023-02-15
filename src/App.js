import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/navbar';
import About from './pages/about/about';
import DogsPage from './pages/dogsPage/dogsPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route exact path='/' element={<DogsPage />}/>
            <Route exact path='/about' element={<About />}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
