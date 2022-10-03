import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
import Footer from '../footer/foter';
import "./skills.css"

function Skills() {
    AOS.init();
    return ( 
        <>
        
        <section className="skills" id="skills" data-aos="fade-up" data-aos-duration="1000">
                <div className="title reveal">
                    <div className="section_title">My Skills</div>
                </div>
                <div className="content">
                    <div className="column col-left reveal">
                        <h2 className="content_title">My Skills and Experiences</h2>
                        <p>Vel, reprehenderit libero odit quod asperiores corporis expedita minus sapiente qui dolorem eos voluptatibus ea adipisci repellat, deserunt accusantium aut facere! Ipsam sit iste commodi magni id corporis voluptas similique odio neque? Facere voluptas est quas eaque cum ratione repudiandae commodi aliquam corporis eveniet commodi aliquam corporis eveniet commodi aliquam corporis eveniet commodi aliquam corporis eveniet commodi ali</p>
                        <Link to="/" className="btn">See More</Link>
                    </div>
                    <div className="column col-right reveal">
                        <div className="bar">
                            <div className="info">
                                <span>HTML</span>
                                <span>95%</span>
                            </div>
                            <div className="line html"></div>
                        </div>
                        <div className="bar">
                            <div className="info">
                                <span>CSS</span>
                                <span>85%</span>
                            </div>
                            <div className="line css"></div>
                        </div>
                        <div className="bar">
                            <div className="info">
                                <span>JavaScript</span>
                                <span>80%</span>
                            </div>
                            <div className="line javascript"></div>
                        </div>
                        <div className="bar">
                            <div className="info">
                                <span>jQuery</span>
                                <span>80%</span>
                            </div>
                            <div className="line jquery"></div>
                        </div>
                        <div className="bar">
                            <div className="info">
                                <span>PHP</span>
                                <span>70%</span>
                            </div>
                            <div className="line php"></div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
     );
}

export default Skills;