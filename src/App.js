import Footer from './components/Footer';
import Navbar from './components/Navbar';
import PageDefault from './components/PageDefault';
import About from './pages/About';
import Home from './pages/Home';

//Router
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Post from './pages/Post';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<PageDefault/>}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path='posts/:id' element={<Post/>} />
            <Route path="*" element={<div>Página não encontrada</div>} />
          </Route>
        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
