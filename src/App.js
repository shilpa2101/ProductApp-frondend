import logo from './logo.svg';
import './App.css';
import AddProduct from './components/AddProduct';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Delete from './components/Delete';
import Search from './components/Search';
import View from './components/View';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<AddProduct/>}/>
        <Route path='/search' element={<Search/>}/>
        <Route path='/delete' element={<Delete/>}/>
        <Route path='/view' element={<View/>}/>

        </Routes></BrowserRouter>
    </div>
  );
}

export default App;
