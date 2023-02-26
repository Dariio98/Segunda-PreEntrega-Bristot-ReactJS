import './App.css';
import Header from './components/Header';
import Cart from './components/header/Cart';
import ItemListContainer from './components/ItmeListContainer';
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path={'/'} element={ <ItemListContainer />}/>

        <Route path='/categories/:name' element= {<ItemListContainer />}/>

        <Route path='/Cart' element={<Cart />}/>


      </Routes>
    </BrowserRouter>
  );
}

export default App;
