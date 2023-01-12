import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar.jsx';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import Footer from './components/Footer/Footer.jsx';
import Cart from './components/Cart/Cart';
import CartProvider from './context/CartContext.jsx';


function App() {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <NavBar />
          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/categoria/:categoriaId' element={<ItemListContainer />} />
            <Route path='/detalle/:detalleId' element={<ItemDetailContainer />} />
            <Route path='/cart' element={< Cart />} />
          </Routes>
        </CartProvider>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;