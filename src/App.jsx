import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import VerticalLeap from './pages/products/VerticalLeap';
import Agility from './pages/products/Agility';
import Mentality from './pages/products/Mentality';

import './index.css';

function App() {
  return (
    <Router>
      <nav className="bg-black text-white p-4 flex justify-between items-center shadow-lg">
        <h1 className="text-xl font-bold text-platinum">Middleton Method</h1>
        <div className="space-x-4">
          <Link to="/" className="hover:text-platinum transition">Home</Link>
          <Link to="/products" className="hover:text-platinum transition">Products</Link>
        </div>
      </nav>

      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/vertical-leap" element={<VerticalLeap />} />
          <Route path="/products/agility" element={<Agility />} />
          <Route path="/products/mentality" element={<Mentality />} />
      </Routes>
    </Router>
  );
}

export default App;
