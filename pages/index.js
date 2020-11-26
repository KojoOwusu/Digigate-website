import Head from 'next/head'
import styles from '../styles/landpage.module.css'
import Link from 'next/link';
import Navbar from '../components/navbar';

export default function Landingpage() {

  return (
    <div>
      <style jsx>
        {`
            #laptopsvg {
              position: relative;
	            top: 0.5%;
	            width: 50vw;
	            height: auto;
              float: right;
              background-position: center;
              display: inline-block;
              max-width: 50%;
              animation: float 6s ease-in-out infinite;
              
              z-index: 2;
            }

              #about-section{
              width:100%;
              margin-top:10%;
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
              float:left;
              padding-top: 10vh;
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
              padding: 10% 0%;
            }
            #services h2 {
              color: rgba(24,31,88,0.9);
              font-size: 7vw;
              position: relative;
              left: -8vw;

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
            `}


      </style>
      <Head>
        <title>
          Digigate Solutions: pioneering digital solutions
        </title>
      </Head>
      <div className={styles.mainwrapper} id="home">
        <Navbar />
        <img src='/svgs/first curve.svg' style={{ position: "absolute", top: "-6rem", right: "-20rem", width: "60%", height: "auto", zIndex: 1 }} />
        <div className={styles.bodycontainer}>
          <div style={{ height: "80vh", width: "100%", paddingTop: "2%" }}>
            <div className={styles.maintextcontainer}>
              <h1>Pioneering</h1>
              <span className={styles.bannertext}><h1>Digital Solutions</h1></span>
              <h1>for <span style={{ color: "#7987C3" }}> all</span> sectors </h1>
              <p>
                Developing advanced software solutions for companies around the world. We believe in innovations and technology.
            </p>
              <div className={styles.getstartedbutton}>
                Get Started
            </div>
            </div>
            <img id="laptopsvg" src='/svgs/laptopsvg.svg' />
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

          </section>





          <img src='/svgs/dots.svg' style={{ position: "absolute", top: "1rem", left: "-2rem", width: "16%", height: "auto" }} />
          <img src='/svgs/inclined lines.svg' style={{ top: "11%", left: "30%", width: "7%", height: "auto" }} />
          <img src='/svgs/dottriangle.svg' style={{ top: "0", left: "60%", width: "3.2%", height: "auto" }} />
          <img src='/svgs/plus.svg' style={{ top: "2.5%", left: "50%", width: "1.4%", height: "auto" }} />
          <img src='/svgs/longdots.svg' style={{ top: "8%", right: "5%", width: "15%", height: "auto" }} />
          <img src='/svgs/inclined lines.svg' style={{ top: "8%", left: "2rem", width: "7%", height: "auto" }} />
          <img src='/svgs/plus.svg' style={{ top: "8.5%", left: "25%", width: "1.3%", height: "auto" }} />
          <img src='/svgs/dots 2.svg' style={{ top: "7%", right: "44%", width: "12%", height: "auto" }} />
          <img src='/svgs/circle.svg' style={{ top: "6%", left: "33%", width: "2%", height: "auto" }} />
          <img src='/svgs/plus2.svg' style={{ top: "7rem", right: "20%", width: "1.4%", height: "auto" }} />
          <img src='/svgs/dottriangle2.svg' style={{ top: "5rem", right: "8%", width: "2.5%", height: "auto" }} />
          <img src='/svgs/plus2.svg' style={{ top: "5%", right: "5%", width: "1rem", height: "auto" }} />

          <img src='/svgs/diamond shape.svg' style={{ top: "12%", left: "5%", width: "2%", height: "auto" }} />
          <img src='/svgs/inclined lines.svg' style={{ top: "6em", left: "30%", width: "6%", height: "auto" }} />
          <img src='/svgs/dotsfaded.svg' style={{ top: "14%", left: "-10%", width: "25%", height: "auto" }} />
          <img src='/svgs/square1.svg' style={{ top: "15%", right: "50%", width: "3%", height: "auto" }} />
          <img src='/svgs/square1.svg' style={{ top: "20%", left: "-1rem", width: "10%", height: "auto", transform: "rotate(30deg)" }} />
          <img src='/svgs/dottriangle.svg' style={{ top: "22%", left: "45%", width: "1%", height: "auto", transform: "rotate(45deg)" }} />
          <img src='/svgs/square1.svg' style={{
            top: "22%", right: "10%", width: "3%", height: "auto", transform: "rotate(60deg)"
          }} />

          <div style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingTop: "10vh" }}>
            <div style={{ width: "50%" }}>
              <img src='/svgs/peopleworking.svg' style={{ position: "relative", float: "left", width: "40vw", height: "auto" }} />
            </div>
            <div style={{ width: "50%", paddingLeft: "10%" }}>
              <h2 style={{ fontSize: "2.2vw", marginBottom: "2rem" }}>Technology-driven</h2>
              <div style={{ backgroundColor: "rgb(139,153,209)", width: "15%", height: "1vh", borderRadius: "3rem" }}></div>
              <p style={{ fontSize: "1.3vw", color: "var(--lightpurple)", width: "100%", textAlign: "left", paddingTop: "2vh" }}>
                Our approach involves the use of technology to address key challenges in the areas of health, agriculture, education and manufacturing. We deal with formal and informal sectors including small scale businesses.
              </p>
            </div>
          </div>
          <section id="services">
            <h2>
              Our Services
            </h2>
            <div style={{ width: "100%", display: "flex", flexDirection: "row", justifyContent: "space-evenly" }}>
              <img src='/svgs/service1.svg' style={{ position: "relative", width: "30vw", height: "auto" }} />
              <img src='/svgs/service1.svg' style={{ position: "relative", width: "30vw", height: "auto" }} />
              <img src='/svgs/service1.svg' style={{ position: "relative", width: "30vw", height: "auto" }} />
            </div>

          </section>

          <img src='/svgs/plus.svg' style={{ top: "29%", left: "10%", width: "1%", height: "auto" }} />
          <img src='/svgs/dots 2.svg' style={{ top: "30%", left: "26%", width: "12%", height: "auto" }} />
          <div id="lightbeam" style={{ top: "27%", right: "-6rem" }}></div>
          <div id="lightbeam" style={{ top: "29%", left: "60%" }}></div>
          <img src="/svgs/longdots.svg" style={{ top: "33%", left: "10%", width: "auto", height: "40vh", opacity: "50%" }} />
          <img src='/svgs/inclined lines.svg' style={{ top: "36%", left: "0.4%", width: "5%", height: "auto", opacity: "50%" }} />
          <img src='/svgs/dottriangle.svg' style={{ top: "40%", left: "10%", width: "3.2%", height: "auto", opacity: "40%" }} />
          <img src='/svgs/dottriangle.svg' style={{ top: "35%", left: "21%", width: "1.5%", height: "auto", opacity: "40%", transform: "rotate(40deg)" }} />


        </div>
      </div>
    </div >
  )
}
