import "./apex.css"
import menu from "../images/menu.jpg"
import clouse from "../images/clouse.webp"
import { useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from "react-router-dom";
import About from "../about/about";
import Skills from "../skills/skills";
import Services from "../services/services";
import Work from "../work/work";
import Contact from "../contact/contact";



function Cart() {
    AOS.init();
      const [nav, setNav] = useState (false);

      const handlerMenu = () => {
        setNav(!nav)

      }
    return (
        <>
            <header data-aos="fade-left">
                <Link to="/" className="brand">Firdavs</Link>
                <div className="menu-btn" data-aos="fade-up"data-aos-duration="1000">
                    {
                      !nav ? 
                      <img src={menu} alt="" onClick={handlerMenu} />
                      :
                      <img src={clouse} alt="" onClick={handlerMenu } />
                 
                    }
               </div>
                <nav className={nav ? "navActive" : "nav"} onClick={handlerMenu }> 
                    <Link to="/">home</Link>
                    <Link to="/about">about</Link>
                    <Link to="/skills">skills</Link>
                    <Link to="/services">services</Link>
                    <Link to="/work">work</Link>
                    <Link to="/contact">contact</Link>
                </nav>
            </header>
            <section className="main" id="main" data-aos="fade-up" data-aos-duration="1000">
                <div className="content">
                    <h2>Hello I'm <br /><span>Frdavs Jumaboyev</span></h2>
                    <div className="animated-text">
                        <h3>Reader</h3>
                        <h3>Web developer</h3>
                        <h3>Father son</h3>
                    </div>
                    <Link to="work" className="btn">See My Work</Link>
                    <div className="media-icons">
                        <Link to="/"><i className="bi bi-facebook"></i></Link>
                        <Link to="/"><i className="bi bi-instagram"></i></Link>
                        <Link to="/"><i className="bi bi-twitter"></i></Link>
                    </div>
                </div>
            </section>
            {/* <About />
            <Skills />
            <Services />
            <Work />
            <Contact /> */}

        </>
    );
}

export default Cart;