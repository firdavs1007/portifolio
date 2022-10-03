import img_card from "../images/img.jpg"
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./about.css"
import { Link } from "react-router-dom";
import Footer from "../footer/foter";


function About() {
    AOS.init();
    return ( 
        <>
         <section className="about" id="about" data-aos="fade-up" data-aos-duration="1000">
                <div className="title reveal">
                    <div className="section_title">About Me</div>
                </div>
                <div className="content">
                    <div className="column col-left reveal">
                        <div className="img_card">
                            <img src={img_card} alt="" />
                        </div>
                    </div>
                    <div className="column col-right reveal">
                        <h2 className="content_title">Hey There I'm Firdavs Jumaboyev</h2>
                        <p className="paragraph_text">Vel, reprehenderit libero odit quod asperiores corporis expedita minus sapiente qui dolorem eos voluptatibus ea adipisci repellat, deserunt accusantium aut facere! Ipsam sit iste commodi magni id corporis voluptas similique odio neque? Facere voluptas est quas eaque cum ratione repudiandae commodi aliquam corporis eveniet?</p><br />
                        <p className="paragraph_text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam consequatur, sequi maiores ex corrupti natus autem. Vel, reprehenderit libero odit quod asperiores corporis expedita minus sapiente qui dolorem eos voluptatibus ea adipisci repellat, deserunt accusantium aut facere! Ipsam sit iste commodi magni id corporis voluptas similique odio neque?</p>
                        <Link to="/about" className="btn">See More</Link>
                    </div>
                </div>
            </section>
            <Footer />
        </>
     );
}

export default About;