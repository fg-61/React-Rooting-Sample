import { Route, Routes } from 'react-router-dom';
import './App.css';
import AboutPage from './routingSample/AboutPage';
import ContactPage from './routingSample/ContactPage';
import Home from './routingSample/Home';
import SupplierDetail from './routingSample/SupplierDetail';
import SupplierPage from './routingSample/SupplierPage';



function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<AboutPage/>}></Route>
        <Route path='/contact' element={<ContactPage/>}></Route>
        <Route path='/suppliers' element={<SupplierPage/>}></Route>
        <Route path='/suppliers/detail/:id' element={<SupplierDetail/>}></Route>


      </Routes>
    </>
  )
}

export default App;
