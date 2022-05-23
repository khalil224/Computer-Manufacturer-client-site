
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './authentication/Login';
import Register from './authentication/Register';
import Navbar from './components/Navbar';
import Blogs from './pages/Blogs';
import BusinessSummary from './pages/BusinessSummary';
import Home from './pages/Home/Home';
import Reviews from './pages/Reviews';
import Tools from './pages/Tools';

function App() {
  return (
    <div >
      <Navbar>
        {/* <Home></Home>
        <Reviews></Reviews>
        <Tools></Tools>
        <BusinessSummary></BusinessSummary>
        <Blogs></Blogs>
        <Login></Login>
        <Register></Register> */}
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/reviews' element={<Reviews></Reviews>}></Route>
          <Route path='/tools' element={<Tools></Tools>}></Route>
          <Route path='/business-summary' element={<BusinessSummary></BusinessSummary>}></Route>
          <Route path='/blogs' element={<Blogs></Blogs>}></Route>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/register' element={<Register></Register>}></Route>
        </Routes>
      </Navbar>


    </div>
  );
}

export default App;
