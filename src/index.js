import React from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProductDetail from './features/products/ProductDetails';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
     <Provider store={store}>
          <BrowserRouter>
               <Routes>
                    <Route path='/' element={<App />} />
                    <Route path='/product/:productID' element={<ProductDetail />} />

                    <Route path='*' element={<h1>404 Page Not Found </h1>} />
               </Routes>
          </BrowserRouter>
     </Provider>
);
reportWebVitals();
