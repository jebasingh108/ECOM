import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './components/Home';
import Cart from './components/Cart';
import Nav from './components/nav';
import About from './components/About';

function App() {
  return (
   <div>
   
   <BrowserRouter>
   
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/Cart' element={<Cart/>}/>
    <Route path='/about' element={<About/>}/>
   </Routes>
   </BrowserRouter>
   </div>
  );
}

export default App;
