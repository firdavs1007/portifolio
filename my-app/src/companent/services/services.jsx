import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from '../footer/foter';
import "./services.css"

function Services() {
    AOS.init();
    return ( 
    <>
    

    <section className="services" id="services" data-aos="fade-up" data-aos-duration="1000">
                <div className="title reveal">
                    <div className="section_title">My Services</div>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem voluptatum quia animi delectus hic culpa quisquam, alias soluta blanditiis quibusdam harum reprehenderit architecto, dolorem esse non eligendi accusantium, atque aut.</p>
                </div>
                <div className="content">
                    <div className="card reveal">
                        <div className="services_icon">
                            <i className="bi bi-palette-fill"></i>
                        </div>
                        <div className="info">
                            <h3>Web Design</h3>
                            <p>Lorem ipsum dolor sit amet consecelit. In doloribus non quia perspiciatis earum amet consequuntur sapiente accusantium id!</p>
                        </div>
                    </div>
                    <div className="card reveal">
                        <div className="services_icon">
                            <i className="bi bi-file-earmark-code-fill"></i>
                        </div>
                        <div className="info">
                            <h3>Web Devoliper</h3>
                            <p>Lorem ipsum dolor sit amet consecelit. In doloribus non quia perspiciatis earum amet consequuntur sapiente accusantium id!</p>
                        </div>
                    </div>
                    <div className="card reveal">
                        <div className="services_icon">
                            <i className="bi bi-youtube"></i>
                        </div>
                        <div className="info">
                            <h3>Youtuber</h3>
                            <p>Lorem ipsum dolor sit amet consecelit. In doloribus non quia perspiciatis earum amet consequuntur sapiente accusantium id!</p>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
    </>
     );
}

export default Services;