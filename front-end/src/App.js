import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import GetStated from './Pages/GetStated/GetStated';
import Home from './Pages/Home/Home';
import ContactUs from './Pages/ContactUs/ContactUs';
import AboutUs from './Pages/AboutUs/AboutUs';
import Product from './Pages/Product/Product';
import Login from './Components/Login/Login';
import Signup from './Components/Signup/Signup';
import Forgot from './Components/Forgot/Forgot';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<GetStated />}/>
          <Route path='/home' element={<Home />}/>
          <Route path='/contactus' element={<ContactUs />}/>
          <Route path='/aboutus' element={<AboutUs />}/>
          <Route path='/product' element={<Product />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/signup' element={<Signup />}/>
          <Route path='/forgot' element={<Forgot />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
