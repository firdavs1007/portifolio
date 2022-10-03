import AOS from 'aos';
import 'aos/dist/aos.css';
import "./work.css"
import cart_img from "../images/aaa.jpg";
import img from "../images/Image.png";
import images from "../images/matiz.png";
import imag from "../images/mmm.jpg";
import fir from "../images/fir.jpg"
import sher from "../images/sher.jpg"
import { Link } from "react-router-dom";
import Footer from '../footer/foter';

function Work() {
    AOS.init();
    return ( 
        <>
        
        <section className="work" id="work" data-aos="fade-up" data-aos-duration="1000">
                <div className="title reveal">
                    <div className="section_title">My Work</div>
                </div><div className="content">
                    <div className="card reveal">
                        <div className="card_img">
                            <img src={cart_img} alt="" />
                        </div>
                    </div>
                    <div className="card reveal">
                        <div className="card_img">
                            <img src={img} alt="" />
                        </div>
                    </div>
                    <div className="card reveal">
                        <div className="card_img">
                            <img src={imag} alt="" />
                        </div>
                    </div>
                    <div className="card reveal">
                        <div className="card_img">
                            <img src={images} alt="" />
                        </div>
                    </div>
                    <div className="card reveal">
                        <div className="card_img">
                           <img src={fir} alt="" />
                        </div>
                    </div>
                    <div className="card reveal">
                        <div className="card_img">
                            <img src={sher} alt="" />
                        </div>
                    </div>
                    <div className="title reveal">
                        <Link to="/work" className="btn">See All</Link>
                    </div>
                </div>
            </section>
            <Footer />
        </>
     );
}

export default Work;