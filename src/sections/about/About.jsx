import AboutImage from '../../assets/official_dp_2.jpg';
import CV from '../../assets/dennisResume.docx';
import { HiDownload } from "react-icons/hi";
import data from './data';
import Card from '../../components/Card';
import './about.css'

const About = () => {
    return (
        <section id='about' data-aos="zoom-in">
            <div className="container about__container">
                <div className="about__left">
                    <div className="about__potrait">
                        <img src={AboutImage} alt="About pic" />
                    </div>
                </div>
                <div className="about__right">
                    <h2>About Me</h2>
                    <div className="about__cards">
                        {
                            data.map(item => (
                                <Card key={item.id} className="about__card">
                                    <span className='about__card-icon'>{item.icon}</span>
                                    <h5>{item.title}</h5>
                                    <small>{item.desc}</small>
                                </Card>
                            ))
                        }
                    </div>
                    
                    <p>
                        Hi, my name is Dennis Akinwonjowo from Lagos, Nigeria. I'm a full-stack web developer with a Certificate 
                        in Software Engineering. My top priority is to get your business online the right way, giving
                        you industry-standard design and all the functionality you need to operate smoothly online. Get in touch 
                        with the details of your project let's get started! Check out my resume below!
                    </p>
                    <a href={CV} download className='btn primary'>Download CV <HiDownload/></a>
                </div>
            </div>
        </section>
    )
}

export default About
