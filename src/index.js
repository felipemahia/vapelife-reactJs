import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Cart from './components/Cart/Cart';
import reportWebVitals from './reportWebVitals';
import Footer from './components/footer/Footer.jsx';
import Header from './components/NavBar/NavBar.jsx';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //<React.StrictMode>
  <>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<ItemListContainer />} />
        <Route path='/categoria/:categoriaID' element={<ItemListContainer />} />
        <Route path='/detalle/:detalleId' element={<ItemDetailContainer />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </>
  //</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
