import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from '../footer/foter';
import "./contact.css"

function Contact() {
    AOS.init();
    return ( 
        <>
        
        <section className="contact" id="contact" data-aos="fade-up" data-aos-duration="1000">
                <div className="title reveal">
                    <div className="section_title">Contact Me</div>
                    <div className="content">
                        <div className="row">
                            <div className="card reveal">
                                <div className="contact_icon">
                                    <i className="bi bi-geo-alt-fill"></i>
                                </div>
                                <div className="info">
                                    <h3>Address</h3>
                                    <span>Samarqand City Reveal 19 house</span>
                                </div>
                            </div>
                            <div className="card reveal">
                                <div className="contact_icon">
                                    <i className="bi bi-telephone-fill"></i>
                                </div>
                                <div className="info">
                                    <h3>Phone</h3>
                                    <span>+998 99 504 72 85</span>
                                </div>
                            </div>
                            <div className="card reveal">
                                <div className="contact_icon">
                                    <i className="bi bi-envelope-fill"></i>
                                </div>
                                <div className="info">
                                    <h3>Email Address</h3>
                                    <span>nbhfgfhtfvuyfu@gmail.com</span>
                                </div>
                            </div>
                            <div className="card reveal">
                                <div className="contact_icon">
                                    <i className="bi bi-globe2"></i>
                                </div>
                                <div className="info">
                                    <h3>Website</h3>
                                    <span>MyPortifolio.netlife.app</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row" >
                       <form>
                       <div className="contact_form">
                            <h3>Send Message</h3>
                            <div className="input_box">
                                <input type="text" placeholder="Name" />
                            </div>
                            <div className="input_box">
                                <input type="text" placeholder="Email" />
                            </div>
                            <div className="input_box">
                                <textarea cols="80" rows="8" placeholder="Message"></textarea>
                            </div>
                            <div className="input_box">
                                <input type="submit" className="send-btn" />
                            </div>
                        </div>
                       </form>
                    </div>
                </div>
            </section>
            <Footer />
        </>
     );
}

export default Contact;