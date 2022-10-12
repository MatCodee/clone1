import './App.css';
import Home from "./Home";
import Header from './Header';
import Footer from "./Footer";
import SearchPage from './SearchPage';
import { BrowserRouter, Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <div className="App">


          <div className='container-app'>
            <Header />

            <Routes>
              {/* Home */}
              <Route path="/" element={<Home />}/>
              <Route path="/search" element={<SearchPage />}/>
            </Routes>
          </div>
          <Footer />

      </div>

    </BrowserRouter>
  );
}

export default App;


