
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './authentication/Login';
import Register from './authentication/Register';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Blogs from './pages/Blogs';
import BusinessSummary from './pages/BusinessSummary';

import Home from './pages/Home/Home';
import NotFound from './pages/NotFound';
import Reviews from './pages/Reviews';
import Tools from './pages/Tools';
import MyPortfolio from './routes/MyPortfolio';

function App() {
  return (
    <div >
      <Navbar>

        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/reviews' element={<Reviews></Reviews>}></Route>
          <Route path='/tools' element={<Tools></Tools>}></Route>
          <Route path='/business-summary' element={<BusinessSummary></BusinessSummary>}></Route>
          <Route path='/blogs' element={<Blogs></Blogs>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/register' element={<Register></Register>}></Route>
          <Route path='/my-portfolio' element={<MyPortfolio></MyPortfolio>}></Route>
          <Route path='*' element={<NotFound></NotFound>}></Route>
        </Routes>
      </Navbar>

      <Footer></Footer>
    </div>
  );
}

export default App;
