import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from './components/CartContext';
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

const container = document.getElementById("root")
const root = createRoot(container);
root.render(
  <BrowserRouter>
    <CartProvider>
        <App />
    </CartProvider>
  </BrowserRouter>
);
//

