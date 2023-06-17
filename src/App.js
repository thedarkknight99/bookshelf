// import logo from './logo.svg';
import { Routes, Route } from "react-router-dom";



import './App.css';
import Bookshelf from './components/BookShelf/Bookshelf';
import Header from './components/Header/Header';
import SearchBook from './components/Search/SearchBook';

function App() {
  return (
    <div className="App">

      <Header/>
      {/* <Bookshelf/> */}

      <Routes>
        <Route path="/" element={<Bookshelf/>} />
        </Routes>
        <Routes>
        <Route path="/search" element={<SearchBook/>} />
      </Routes>

    </div>
  );
}

export default App;
