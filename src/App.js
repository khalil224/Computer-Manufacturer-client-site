
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './authentication/Login';
import PrivateAuth from './authentication/PrivateAuth';
import Register from './authentication/Register';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Blogs from './pages/Blogs';
import BusinessSummary from './pages/BusinessSummary';
import AddReview from './pages/Dashboard/AddReview';
import Dashboard from './pages/Dashboard/Dashboard';
import MyOrders from './pages/Dashboard/MyOrders';
import MyProfile from './pages/Dashboard/MyProfile';
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
          <Route path='/signup' element={<Register></Register>}></Route>
          <Route path='/dashboard' element={<Dashboard />}>
            <Route path='add-review' element={<AddReview></AddReview>}></Route>
            <Route path='add-order' element={<MyOrders></MyOrders>}></Route>
            <Route path='my-profile' element={<MyProfile></MyProfile>}></Route>
          </Route>
          <Route path='/my-portfolio' element={<PrivateAuth><MyPortfolio></MyPortfolio></PrivateAuth>}></Route>
          <Route path='*' element={<NotFound></NotFound>}></Route>
        </Routes>
      </Navbar>

      <Footer></Footer>
    </div>
  );
}

export default App;
