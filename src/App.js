import { Route, Routes } from "react-router-dom";
import HomePage from './components/HomePage/HomePage';
import Header from './components/Header/Header';
import Checkout from './components/Checkout/Checkout';
import Blogs from './components/Blogs/Blogs';
import About from './components/About/About';
import Login from './components/Login/Login';
import LogOut from './components/LogOut/LogOut';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route path="/checkout" element={<Checkout></Checkout>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/logout" element={<LogOut></LogOut>}></Route>
      </Routes>
    </div>
  );
}

export default App;
