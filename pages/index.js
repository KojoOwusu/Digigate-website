import Head from 'next/head'
import styles from '../styles/landpage.module.css'
import Link from 'next/link';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

export default function Landingpage() {

  return (
    <div>
      <style jsx>
        {`
            #laptopsvg {
              position: relative;
	            width: 50%;
	            height: auto;
              margin-top: 2%;
              display: inline-block;
              max-width: 50%;
              animation: float 6s ease-in-out infinite;
              
              z-index: 2;
            }

              #about-section{
              width:100%;
              margin-top:8%;
              padding-left: 5rem;
              position: relative;
              }

              #about-section h2 {
                text-align: center;
                padding-top: 2rem;
                padding-bottom: 5%;
              }
            #about-section .aboutus {
              display:flex;
              flex-direction: column;
              width:50%;
    
              padding-top: 10%;
              align-items: center;
              justify-content: center;
            }
            .aboutus>div {
              color: white;
              display:flex;
              flex-direction: row;
              font-size:1.5vw;
              align-items:center;
              justify-content: center;
            }
            #about-section .aboutus>p{
              text-align: left;
              font-size: 1.5vw;
              color: #B0B1D6;
              width: 100%;
            }

            @keyframes float {
              0% {
                transform: translatey(0px);
              }
              50% {
                transform: translatey(-20px);
              }
              100% {
                transform: translatey(0px);
              }
            }
            #services {
              position: relative;
              padding-bottom: 10%;
            }
            #services h2 {
              color: rgba(24,31,88,0.9);
              font-size: 7.5rem;
              position: relative;
              left: -5vw;

            }
            div#lightbeam {
                position: absolute;
                width:15vw;
                height:1vh;
                background: rgb(16,18,59);
                background: linear-gradient(50deg, rgba(16,18,59,1) 18%, rgba(70,181,209,1) 100%);
                border-radius: 3rem;
                transform: rotate(-39deg);
            }
            section#our-team {
              margin-top: 5rem;
              width: 100%;
              padding: 3rem;
              background-color: white;
              z-index:-1;
            }

            #our-team h2 {
              text-align: center;
              margin-top: 5rem;
              color: #1B1F6F;
              padding-top: 2rem;

            }
            #our-team .heading p {
              text-align: justfiy;
              width: 70%;
              font-size: 1.3rem;
              color: rgba(21,24,97,0.4);
              margin-left: auto;
              margin-right: auto;
              z-index: 2;
            }
            .team-container {
              padding: 10rem 0;
              display: flex;
              flex-direction: row;
              justify-content: space-evenly;
            }
            .team-container .card {
              position:relative;
              width: 22%;
              display: flex;
              flex-direction: column;
              align-items: center;
              -webkit-box-shadow: 0px 6px 20px 1px #B5B5B5; 
box-shadow: 0px 6px 20px 1px #B5B5B5;
              border-bottom: 0.5rem solid #7987C3;

            }
            .company-logos img {
              position: relative;
              padding-left: 2.4rem;   
            }

            #contact-us {
              position: relative;
              background-color:white;
              width: 100%;
              padding-top:5rem;
              
              padding-bottom: 10rem;   
            }

            #contact-us .contact-us-container {
              display:flex;
              flex-direction: row;
              justify-content: space-evenly;
              width: 80%;
              margin-left: auto;
              margin-right: auto;
            }


            .contact-form input, textarea{
              font-size: 1rem;
              width: 80%;
              padding: 1rem 1rem;
               color: #32407B;
               border: 2px solid rgba(58,62,144, 0.45);
               border-radius: 0.3rem;
               margin-bottom: 2rem;

            }



            #contact-us .contact-form input:focus{
              border-color: #14185F;
            }


            input[type="text"]::placeholder {
              color: rgba(58,62,144, 0.45);
            }
            input:nth-child(6){
              height: 20%;
            }
            
            .contact-form textarea::placeholder {
              font-family: roboto;
              font-weight: 100;
              color:  rgba(58,62,144, 0.45);
            }
        

            #submit{
              color: white;
              background-color: #14185F;
              border-radius: 2rem;
              margin-top: 3rem;
              transition: all 0.3s;
            }

            #submit:hover {
              opacity: 80%;
            }
            input[type="submit"]::placeholder {
              color: white;
              font-size: 1.3rem;
            }

          
            `}


      </style>
      <Head>
        <title>
          Digigate Solutions: pioneering digital solutions
        </title>
      </Head>
      <div className={styles.mainwrapper} id="home">
        <Navbar />
        <img src='/svgs/first curve.svg' style={{ position: "absolute", top: "-6rem", right: "-20rem", width: "60%", height: "auto", zIndex: 1, minWidth: "50%" }} />
        <div className={styles.bodycontainer}>
          <div style={{ width: "100%", display: "flex", position: "relative", paddingBottom: "2rem" }}>
            <div className={styles.maintextcontainer}>
              <h1>Pioneering</h1>
              <span className={styles.bannertext}><h1>Digital Solutions</h1></span>
              <h1>for <span style={{ color: "#7987C3" }}> all</span> sectors </h1>
              <p>
                Developing advanced software solutions for companies around the world. We believe in innovations and technology.
            </p>
              <a href="#contact-us">
                <div className={styles.getstartedbutton}>
                  Get Started
            </div>
              </a>
            </div>
            <img id="laptopsvg" src='/svgs/laptopsvg.svg' />

            <img src='/svgs/dots.svg' style={{ position: "absolute", top: "2rem", left: "-2rem", width: "16%", height: "auto" }} />
            <img src='/svgs/dottriangle.svg' style={{ top: "0", left: "60%", width: "3.1%", height: "auto" }} />
            <img src='/svgs/plus.svg' style={{ top: "35%", left: "50%", width: "1.2%", height: "auto" }} />
            <img src='/svgs/longdots.svg' style={{ bottom: "-40%", right: "5%", width: "15%", height: "auto" }} />
            <img src='/svgs/inclined lines.svg' style={{ bottom: "15%", left: "2rem", width: "7%", height: "auto" }} />
            <img src='/svgs/inclined lines.svg' style={{ top: "6em", left: "33%", width: "8%", height: "auto", opacity: "50%" }} />
            <img src='/svgs/plus2.svg' style={{ top: "7rem", right: "20%", width: "1%", height: "auto" }} />
            <img src='/svgs/dottriangle2.svg' style={{ top: "5rem", right: "8%", width: "2.5%", height: "auto" }} />
            <img src='/svgs/plus2.svg' style={{ top: "55%", right: "2%", width: "1rem", height: "auto" }} />

            <img src='/svgs/plus.svg' style={{ bottom: "8.5%", left: "25%", width: "1.3%", height: "auto" }} />
            <img src='/svgs/dots 2.svg' style={{ top: "70%", right: "35%", width: "12%", height: "auto" }} />
            <img src='/svgs/circle.svg' style={{ top: "65%", left: "33%", width: "2%", height: "auto" }} />







          </div>

          <section id="about-section">
            <h2>
              Who Are We?
           </h2>

            <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start" }}>
              <div className="aboutus">
                <div style={{ display: "flex", flexDirection: "row", alignItems: "center", width: "80%" }}>
                  <div>
                    <img src="/svgs/Logo.svg" style={{ display: "", width: "6vw", height: "auto", position: "static" }} />
                  </div>
                  <div>
                    <p>
                      <span style={{ fontSize: "2vw" }}>Digigate</span> Solutions </p>

                  </div>
                </div>
                <p> We are an ICT and software development company based in Ghana with over 20 years of experience 🇬🇭💪🏾</p>

                <p style={{ fontSize: "1.2vw", color: "var(--lightpurple)" }}>
                  Our vision is to become one of the world’s leading software development companies, using advanced technologies and ensuring clients satisfaction.
              </p>
                <div>
                  <img src="/svgs/technologies.svg" style={{ width: "20vw", height: "auto", marginTop: "3rem" }} />
                </div>
              </div>
              <div>
                <img src="/svgs/code.svg" style={{ float: "right", width: "47vw", height: "auto", position: "static" }} />
              </div>
            </div>

            <img src='/svgs/inclined lines.svg' style={{ top: "-2%", left: "30%", width: "7%", height: "auto" }} />

            <img src='/svgs/diamond shape.svg' style={{ top: "8%", left: "15%", width: "1.5%", height: "auto", opacity: "70%" }} />

            <img src='/svgs/dotsfaded.svg' style={{ top: "25%", left: "-10%", width: "25%", height: "auto" }} />
            <img src='/svgs/square1.svg' style={{ top: "35%", right: "43%", width: "3%", height: "auto" }} />
            <img src='/svgs/square1.svg' style={{ top: "72%", left: "-1rem", width: "10%", height: "auto", transform: "rotate(30deg)" }} />
            <img src='/svgs/dottriangle.svg' style={{ bottom: "0%", left: "45%", width: "2%", height: "auto", transform: "rotate(45deg)", opacity: "90%" }} />
            <img src='/svgs/square1.svg' style={{
              top: "83%", right: "8%", width: "3%", height: "auto", transform: "rotate(60deg)"
            }} />
            <img src='/svgs/arrow1.svg' style={{ top: "7%", left: "20%", width: "18%", height: "auto", opacity: "60%" }} />
          </section>


          <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingTop: "10vh", position: "relative", marginBottom: "14%" }}>
            <div style={{ width: "50%" }}>
              <img src='/svgs/peopleworking.svg' style={{ position: "relative", float: "left", width: "100%", height: "auto", paddingLeft: "5rem" }} />
            </div>
            <div style={{ width: "50%", paddingLeft: "10%" }}>
              <h2 style={{ fontSize: "2.2vw", marginBottom: "2rem" }}>Technology-driven</h2>
              <div style={{ backgroundColor: "rgb(139,153,209)", width: "15%", height: "1vh", borderRadius: "3rem" }}></div>
              <p style={{ fontSize: "1.3vw", color: "var(--lightpurple)", width: "100%", textAlign: "left", paddingTop: "2vh", paddingRight: "5rem" }}>
                Our approach involves the use of technology to address key challenges in the areas of health, agriculture, education and manufacturing. We deal with formal and informal sectors including small scale businesses.
              </p>
            </div>
            <div id="lightbeam" style={{ top: "80%", right: "-6rem" }}></div>
            <div id="lightbeam" style={{ bottom: "-5%", right: "20%" }}></div>
            <img src='/svgs/plus.svg' style={{ top: "60%", left: "2%", width: "1%", height: "auto" }} />
            <img src='/svgs/dots 2.svg' style={{ bottom: "-15%", left: "26%", width: "12%", height: "auto", opacity: "60%" }} />

          </div>
          <section id="services">
            <h2>
              Our Services
            </h2>
            <div style={{ width: "100%", display: "flex", flexDirection: "row", justifyContent: "space-evenly" }}>
              <img src='/svgs/service1.svg' style={{ position: "relative", width: "32%", height: "auto" }} />
              <img src='/svgs/service2.svg' style={{ position: "relative", width: "32%", height: "auto" }} />
              <img src='/svgs/service3.svg' style={{ position: "relative", width: "32%", height: "auto" }} />
            </div>

            <img src="/svgs/longdots.svg" style={{ top: "14%", left: "28%", width: "auto", height: "40vh", opacity: "50%" }} />
            <img src='/svgs/inclined lines.svg' style={{ top: "45%", left: "5%", width: "5%", height: "auto", opacity: "50%" }} />
            <img src='/svgs/dottriangle.svg' style={{ top: "80%", left: "10%", width: "3.2%", height: "auto", opacity: "60%" }} />
            <img src='/svgs/dottriangle.svg' style={{ top: "20%", left: "10%", width: "1.5%", height: "auto", opacity: "60%", transform: "rotate(40deg)" }} />
            <img src='/svgs/square1.svg' style={{ top: "80%", left: "45%", width: "3.2%", height: "auto" }} />
            <img src='/svgs/inclined lines.svg' style={{ top: "70%", right: "5%", width: "8%", height: "auto", opacity: "30%" }} />
            <img src='/svgs/circle.svg' style={{ top: "26%", right: "10%", width: "2%", height: "auto", opacity: "50%" }} />
            <img src='/svgs/plus2.svg' style={{ top: "34%", left: "55%", width: "1.4%", height: "auto", opacity: "10%" }} />

            <img src="/svgs/arrow2.svg" style={{ top: "0%", left: "52%", width: "20%", height: "auto", opacity: "50%" }} />

          </section>




          <section id="our-team">
            <img src='/svgs/technology Network.svg' style={{ width: "30%", height: "auto", left: "-5%", opacity: "50%" }} />
            <div className="heading">
              <h2>
                Meet Our Team
            </h2>
              <p>
                Digigate solutions has a team of dedicated individuals who have experienced in information systems development and mentorship. Our dedication brings high performance and efficient software delivery.
              </p>
            </div>
            <div className="team-container">
              <div className="card">

                <img src='/svgs/avatar1.svg' style={{ position: "absolute", top: "-25%" }} />

                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", paddingTop: "5rem" }}>
                  <span style={{ color: "#32407B", padding: "1rem 0", fontSize: "1.4rem" }}>Benjamin Ako Afrasah</span>
                  <span style={{ color: "rgba(21,24,97,0.49)" }}>Lead Software Engineer</span>
                  <p style={{ color: "rgba(21,24,97,0.49)", width: "80%", paddingTop: "2rem", marginBottom: "5rem", fontSize: "1.2rem", textAlign: "center" }}>
                    I spearhead mobile app development at Digigate indulging all my experience working with companies in both USA & Ghana.
                  </p>
                </div>
              </div>
              <div className="card" style={{ display: "relative", top: "3rem" }}>

                <img src='/svgs/avatar1.svg' style={{ position: "absolute", top: "-25%" }} />

                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", paddingTop: "5rem" }}>
                  <span style={{ color: "#32407B", padding: "1rem 0", fontSize: "1.4rem" }}>Joseph Sakyi Baah</span>
                  <span style={{ color: "rgba(21,24,97,0.49)" }}>CEO</span>
                  <p style={{ color: "rgba(21,24,97,0.49)", width: "80%", paddingTop: "2rem", marginBottom: "5rem", fontSize: "1.2rem", textAlign: "center" }}>
                    I have worked for over 12 years developing ehealth & telemedicine systems for institutions all across West Africa.
                  </p>
                </div>
              </div>
              <div className="card">

                <img src='/svgs/avatar1.svg' style={{ position: "absolute", top: "-25%" }} />

                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", paddingTop: "5rem" }}>
                  <span style={{ color: "#32407B", padding: "1rem 0", fontSize: "1.4rem" }}>Timothy Kofi Amo</span>
                  <span style={{ color: "rgba(21,24,97,0.49)" }}>Lead Frontend Engineer</span>
                  <p style={{ color: "rgba(21,24,97,0.49)", width: "80%", paddingTop: "2rem", marginBottom: "5rem", fontSize: "1.2rem", textAlign: "center" }}>
                    I develop web applications at Digigate with the sole aim of giving the best user experience and high performance systems.
                  </p>
                </div>
              </div>
            </div>
            <div style={{ textAlign: "center", marginTop: "3rem", paddingBottom: "3rem" }}>
              <span style={{ fontSize: "1.2rem", color: "rgba(58,62,144,0.73)" }}> Ask our clients </span>
              <div className="company-logos" style={{ display: "flex", justifyContent: "space-evenly", paddingTop: "4rem", width: "70%", marginRight: "auto", marginLeft: "auto", alignItems: "center" }} >
                <img src="/svgs/google-2015.svg" />
                <img src="/svgs/Netlify-02.svg" />
                <img src="/svgs/TechCrunch-01.svg" />
                <img src="/svgs/Airbnb.svg" />
                <img src="/svgs/Nike.svg" />
                <img src="/svgs/Amazon-02.svg" />

              </div>
            </div>
          </section>
          <section id="contact-us">
            <div className="contact-us-container">
              <div style={{ display: "flex", flexDirection: "column", flex: "60%" }}>
                <h1 style={{ fontSize: "3rem", color: "#1A1E67", textAlign: "left", marginBottom: "0em" }}>
                  Got a project?
                </h1>
                <h2 style={{ fontSize: "2rem", color: "#429DB4", textAlign: "left", marginBottom: "6rem" }}>
                  Let's hear it.
                </h2>
                <img src="/svgs/send us a message.svg" style={{ position: "relative", width: "70%", height: "auto", zIndex: 2 }} />
              </div>
              <form className="contact-form" action="#" method="post" style={{ flex: "40%", display: "flex", flexDirection: "column", justifyContent: "space-evenly", padding: "2rem 0" }}>
                <span style={{ fontSize: "2rem", textAlign: "left", color: "#32407B", fontWeight: 600, paddingBottom: "1rem" }}> Get in touch</span>
                <span style={{ fontSize: "1.2rem", color: "rgba(27,31,111,0.44)", width: "80%", fontWeight: 500, textAlign: "left", marginBottom: "2rem" }}> You made it here means you’re interested.
Describe your idea in a few words and lets make it a reality. </span>
                <input type="text" placeholder="Name" />
                <input type="text" placeholder="Email" />
                <input type="text" placeholder="Telephone" />
                <textarea type="textarea" placeholder="Message" rows="5" />
                <input id="submit" type="submit" />
              </form>
            </div>
            <img src="/svgs/big circle.svg" style={{ width: "30%", height: "auto", top: "-20%", left: "-16%" }} />
            <img src="/svgs/dotsfaded.svg" style={{ width: "24%", height: "auto", top: "55%", left: "-5%", opacity: "50%" }} />
            <img src="/svgs/bigcircle2.svg" style={{ width: "2%", height: "auto", top: "14%", right: "6%" }} />
            <img src="/svgs/circle3.svg" style={{ width: "1.4%", height: "auto", top: "5%", left: "45%" }} />
            <img src="/svgs/inclinedlines2.svg" style={{ width: "4%", height: "auto", top: "88%", left: "35%" }} />
            <img src="/svgs/line.svg" style={{ width: "5%", height: "auto", top: "82%", left: "8%" }} />
            <img src="/svgs/line.svg" style={{ width: "5%", height: "auto", top: "80%", left: "12%" }} />
            <img src="/svgs/bigcircle2.svg" style={{ width: "5%", height: "auto", top: "85%", left: "10%" }} />
            <img src="/svgs/wiggle.svg" style={{ width: "2.5%", height: "auto", top: "90%", left: "8%", transform: "rotate(0deg)" }} />
            <img src="/svgs/line.svg" style={{ width: "5%", height: "auto", top: "92%", left: "10%" }} />
            <img src="/svgs/concentric-circle.svg" style={{ width: "15%", height: "auto", top: "40%", right: "-8%" }} />
            <img src="/svgs/diamond shape.svg" style={{ width: "5%", height: "auto", top: "95%", left: "65%", transform: "rotate(135deg)" }} />
            <img src="/svgs/diamond shape.svg" style={{ width: "2%", height: "auto", top: "25%", left: "15%" }} />
            <img src="/svgs/wiggle.svg" style={{ width: "4%", height: "auto", top: "28%", left: "45%", transform: "rotate(50deg)" }} />
            <img src="/svgs/line.svg" style={{ width: "5%", height: "auto", top: "5%", right: "2%" }} />
            <img src="/svgs/line.svg" style={{ width: "4%", height: "auto", top: "12%", right: "-1%" }} />
            <img src="/svgs/wiggle.svg" style={{ width: "3%", height: "auto", top: "10%", right: "2%" }} />
          </section>
          <Footer />
        </div>
      </div>
    </div >
  )
}
