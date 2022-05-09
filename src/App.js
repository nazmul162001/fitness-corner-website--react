import { Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import Header from './components/Header/Header';
import Checkout from './components/Checkout/Checkout';
import Blogs from './components/Blogs/Blogs';
import About from './components/About/About';
import Login from './components/Login/Login';
import LogOut from './components/LogOut/LogOut';
import Register from './components/Register/Register';
import RequireAuth from './components/RequireAuth/RequireAuth';
import NotFound from './components/NotFound/NotFound';
import Footer from './components/Footer/Footer';

//test
// aos
import AOS from 'aos';
import 'aos/dist/aos.css'; 

function App() {


  AOS.init({
    // // Global settings:
    // disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    // startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
    // initClassName: 'aos-init', // class applied after initialization
    // animatedClassName: 'aos-animate', // class applied on animation
    // useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    // disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    // debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    // throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
    
  
    // // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    // offset: 120, // offset (in px) from the original trigger point
    // delay: 0, // values from 0 to 3000, with step 50ms
    duration: 2000, // values from 0 to 3000, with step 50ms
    // easing: 'ease', // default easing for AOS animations
    // once: false, // whether animation should happen only once - while scrolling down
    // mirror: false, // whether elements should animate out while scrolling past them
    // anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
  
  });
  
  
  
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route
          path="/checkout"
          element={
            <RequireAuth>
              <Checkout></Checkout>
            </RequireAuth>
          }
        ></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/logout" element={<LogOut></LogOut>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
