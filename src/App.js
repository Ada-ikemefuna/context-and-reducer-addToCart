import Header from "./components/Header";
import Store from "./pages/Store";
import { Routes, Route } from "react-router-dom";
import Cart from "./pages/Cart";


function App() {
  return (
    <div className="App">
     <Header/>
     <Routes>
          <Route path='/' element= {<Store/>} />
          <Route path='/cart' element= {<Cart/>} />
     </Routes>
      
    </div>
  );
}

export default App;
