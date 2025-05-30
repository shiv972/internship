import "./Home.css";
import { FaRegCheckSquare } from "react-icons/fa";
import monitoringImage from "../images/undraw_mobile_login_ikmv.png";
import image from "../images/Group (3).png";
import montior from "../images/undraw_happy_news_hxmt.png";
import defectIcon from "../images/Combined Shape.png";
import influncer from "../images/undraw_social_influencer_sgsv.png";


function Home() {
  return (
    <>
    <div className="home">
       <section className="hero">
      <div className="hero-content">
        <h1>Your go-to graphic
design partner</h1>
        <p>
            We are a graphic design studio, who is here to make an
extraordinary difference by transforming brands, around
the globe.        </p>
        <div className="buttons">
          <button className="primary-btn">About</button>
          <button className="secondary-btn">Learn More</button>
        </div>
      </div>
      <div className="hero-image">
        <img src={image} alt="Fabric Defect Detection" />
      </div>
    </section>


    <section className="real-time-monitoring">
      <div className="content">
        <h2>Driven By Four
Core Values.</h2>
        <p>
        Our system provides continuous, real-time monitoring of fabric production lines, ensuring that any defects or irregularities are instantly detected and analyzed. By integrating advanced sensors and machine learning models, it enables manufacturers to maintain high standards of quality throughout the entire production process.
        </p>
        <div className="features">
          <div className="feature">
            <i className="icon">📊</i>
            <h3>UI/UX Design</h3>
            <p>
              We have the passion and skills of using design and technology to solve even the most complex problems.
UI/UX design is one of the most defining factors for digital products. We are dedicated to delivering innovative user experiences — one that will provide outstanding usability while entirely embracing your brand’s personality.

           </p>
          </div>
          <div className="feature">
            <i className="icon">🔍</i>
            <h3> Web Development</h3>
            <p>
We bring your vision to life through cutting-edge development practices. Our web development team specializes in creating secure, scalable, and high-performance web applications tailored to your business goals. From sleek front-ends to robust back-end systems, we build experiences that engage and deliver.            </p>
          </div>
          <div className="feature">
            <i className="icon">🔍</i>
            <h3>Digital Marketing</h3>
            <p>
              We help brands grow and thrive in the digital landscape by creating strategic marketing campaigns that reach the right audience. Our data-driven approach ensures measurable results, driving engagement, leads, and conversions across multiple platforms.            </p>
          </div>
        </div>
      </div>
      <div className="image-container">
        <img src={monitoringImage} alt="Real-Time Monitoring" />
      </div>
    </section>


    <section className="real-time-monitoring">
    <div className="image-container">
        <img src={montior} alt="Real-Time Monitoring" />
      </div>

      <div className="content">
        <h2>We don’t work for you, but
with you.</h2>
        <p>

You are not merely our client but our true partner. Every talented individual on our team works closely together on an equal
footing. Fortunately, we’ve formed more than excellent partnerships; we have formed long-lasting, true friendships.        </p>
        </div>
     
    </section>

    {/* <DefectTypes /> */}


<section className="real-time-monitoring">
    <div className="image-container">
        <img src={influncer} alt="Real-Time Monitoring" />
      </div>

      <div className="content">
        <h2>Random</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

        </p>
        </div>
     
    </section>




      </div>


      </>
    );

}

export default Home;




