import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import CartContext from './context/CartContext';
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
    <CartContext>
        <App />
    </CartContext>
  </BrowserRouter>
);
//

