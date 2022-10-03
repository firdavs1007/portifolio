
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from './companent/apex/apex';
import About from './companent/about/about';
import Skills from './companent/skills/skills';
import Services from './companent/services/services';
import Contact from './companent/contact/contact';
import Work from './companent/work/work';


function App() {
  return (
    <>
    
      <BrowserRouter>
      <Cart />
        <Routes>
          <Route path='/apex' element={<Cart />} />
          <Route path='/about' element={<About />} />
          <Route path='/skills' element={<Skills />} />
          <Route path='/services' element={<Services />} />
          <Route path='/work' element={<Work />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>

      </BrowserRouter>
    </>
  );
}


export default App;
