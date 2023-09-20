import React from 'react';
import { Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
// import Banner from './components/Home/Banner';
import Footer from './components/Footer';
import Home from './components/Home/Home';
import AdminLogin from './components/Form_Pages/AdminLogin';
import Signup from './components/Form_Pages/Signup';
import Button from './components/Form_Pages/Button';
import ForgotPassword from './components/Form_Pages/ForgotPassword';
import SetPassword from './components/Form_Pages/SetPassword';
import Header from './components/Students/Header';


const App = ()=>{
  return(
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/button' element={<Button />} />
        <Route path='/adminlogin'  element={<AdminLogin />}/>
        <Route path="/forgotpassword" element={<ForgotPassword/>}/>
        <Route path="/api/setPassword/" element={<SetPassword />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/header" element={<Header />} />
      </Routes>
      <Footer />
    </>
  )
}
export default App;