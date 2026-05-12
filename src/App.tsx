import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Shop from './pages/Shop';
import Product from './pages/Product';
import Technology from './pages/Technology';
import Pricing from './pages/Pricing';

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/despre-noi" element={<About />} />
          <Route path="/magazin" element={<Shop />} />
          <Route path="/produs" element={<Product />} />
          <Route path="/tehnologie" element={<Technology />} />
          <Route path="/pret" element={<Pricing />} />
        </Routes>
      </Layout>
    </Router>
  );
}
