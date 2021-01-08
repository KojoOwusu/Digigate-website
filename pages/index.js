import Head from 'next/head'
import Image from 'next/image';
import styles from '../styles/landpage.module.css'
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import { motion, useViewportScroll, useAnimation, useTransform, AnimatePresence } from "framer-motion";
import { useFormik } from 'formik';
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-scroll';
import { useInView, InView } from 'react-intersection-observer';


export default function Landingpage() {

  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const controls = useAnimation();
  const controls2 = useAnimation();
  const controls3 = useAnimation();
  const controls4 = useAnimation();
  const { scrollYProgress } = useViewportScroll();
  const longdotsAnimation = useTransform(scrollYProgress, [0, 0.3], [0, 1000]);
  const longdotsfade = useTransform(scrollYProgress, [0, 0.3], ["100%", "0%"]);
  const svgElement = useRef(null);


  const y1 = useTransform(scrollYProgress, [0.7, 0.8], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0.7, 0.8], [0, -100]);

  const { ref, inView, entry } = useInView({
    threshold: 0.0,
    triggerOnce: false
  })

  const animationVars = {
    hidden: {
      opacity: 0,
      y: -100

    },
    visible: {
      opacity: 1,
      y: 0
    },
    transition: {
      duration: 2
    }
  }

  const tinySvg = {
    hidden: { y: -20 },
    visible: { y: 0 }, transition: { duration: 2 }
  }

  const tinySvg1 = {
    hidden: { y: -20, rotate: 60 },
    visible: { y: 0, rotate: 60 }, transition: { duration: 2 }
  }

  const childAnimation = {
    hidden: {
      opacity: 0,
      y: 100,
    },
    visible: {
      opacity: 1,
      y: 0
    },
    transition: {
      duration: 2
    }
  }
  const childrightAnimation = {
    hidden: {

      y: 100,
      opacity: 0
    },
    visible: {
      y: 0,
      opacity: 1
    },
    transition: {
      duration: 2
    }
  }

  const svgVariant = {
    hidden: {
      pathLength: 0,
      fill: "rgba(16,17,53,0)"
    },
    visible: {
      pathLength: 1,
      fill: "rgba(27,33,97,0.2)"
    },
    transition: {
      duration: 2,
      ease: "easeInOut"
    }
  }
  const svgVariant2 = {
    hidden: {
      pathLength: 0,
      fill: "rgba(27,33,97,0)"
    },
    visible: {
      pathLength: 1,
      fill: "rgba(27,33,97,0.2)"
    },
    transition: {
      duration: 2,
      ease: "easeInOut"
    }
  }

  const modalVariant = {
    hidden: {
      y: -500
    },
    visible: {
      y: 0
    },
    staggerChildren: 1
  }

  const liVariant = {
    hidden: {
      opacity: 0,
      y: 50
    },
    visible: {
      opacity: 1,
      y: 0
    }
  }

  const underlineVariant = {
    hidden: {
      width: "1%"
    },
    visible: {
      width: "15%"
    }
  }
  const lightBeamVariant = {
    hidden: {
      x: -500,
      y: 500,
      opacity: 0,
      rotate: -39

    },
    visible: {
      x: 0,
      y: 0,
      opacity: 1,
      rotate: -39
    }
  }

  const serviceVariant = {
    hidden: {
      opacity: 0,
      scale: 0.8
    },
    visible: {
      opacity: 1,
      scale: 1
    }
  }

  const contactSvgVariant = {
    hidden: {
      opacity: 0,
      scale: 0.5
    },
    visible: {
      opacity: 1,
      scale: 1
    }
  }

  const modalHandler = () => {
    setIsOpen(true);
  }

  const scrollSticky = () => {
    if (window.scrollY > 200) {
      setScrolled(true);
    }
    else {
      setScrolled(false);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', scrollSticky)
  })

  useEffect(() => {
    svgElement.current.addEventListener('mousemove', (e) => {
      var x = e.clientX / 50;
      var y = e.clientY / 50;
      svgElement.current.style.transform = `perspective(50em) rotateY(${y}deg) rotateX(${x}deg)`;
    })
  })

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView])


  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      telephone: "",
      message: ""
    },
    onSubmit: values => {
      alert(JSON.stringify(values));
    }
  })

  return (
    <div className={isOpen ? styles.modalopen : false}>
      <style jsx>
        {`
          
          
            .company-logos img {
              position: relative;
              padding-left: 2.4rem;   
            }

  

          
            `}
      </style>


      <Head>
        <title>
          Digigate Solutions: pioneering digital solutions
        </title>
      </Head>
      <div className={styles.mainwrapper}>
        <AnimatePresence>
          {
            isOpen && (
              <div className={styles.modalContainer} onClick={() => { setIsOpen(false) }}>
                <motion.div variants={modalVariant} initial="hidden" animate="visible" exit={{ y: -500 }} transition={{ duration: 0.5 }} className={styles.modal}>
                  <ul>
                    <motion.li variants={liVariant} initial="hidden" animate="visible" transition={{ delay: 0.6 }} ease="easeIn">
                      <Link onClick={() => { setIsOpen(false) }} to="home">Home</Link>
                    </motion.li>
                    <motion.li variants={liVariant} initial="hidden" animate="visible" transition={{ delay: 0.8 }} ease="easeIn">
                      <Link onClick={() => { setIsOpen(false) }} to="about-section">About</Link>
                    </motion.li>
                    <motion.li variants={liVariant} initial="hidden" animate="visible" transition={{ delay: 1 }} ease="easeIn">
                      <Link onClick={() => { setIsOpen(false) }} to="services">Services</Link>
                    </motion.li>
                    <motion.li variants={liVariant} initial="hidden" animate="visible" transition={{ delay: 1.2 }} ease="easeIn">
                      <Link onClick={() => { setIsOpen(false) }} to="contact-us">
                        Contact us
                </Link>
                    </motion.li>
                  </ul>
                  <img src="/svgs/cancel.svg" onClick={() => { setIsOpen(false) }} />
                </motion.div >
              </div>
            )

          }
        </AnimatePresence>

        <Navbar scrolledState={scrolled} modalOpenHandler={modalHandler} />
        <motion.img initial={{ x: -1025 }} animate={{ x: 0 }} transition={{ duration: 2, ease: [0.4, 0.01, -0.05, 0.9] }} src='/svgs/first curve.svg' className={styles.giantCurve} />
        <div className={styles.bodycontainer} >
          <section id="home" className={scrolled ? styles.mainsectionpadded : styles.mainsectionstyles} >
            <motion.div initial={{ x: -100, opacity: 0 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.3 }} className={styles.maintextcontainer}>
              <h1>Pioneering</h1>
              <span className={styles.bannertext}><h1>Digital Solutions</h1></span>
              <h1>for <span style={{ color: "#7987C3" }}> all</span> sectors </h1>
              <p>
                Developing advanced software solutions for companies around the world. We believe in innovation and technology.
              </p>
              <Link delay={2000} to="contact-us" className={styles.LinkButton}>
                <motion.div whileTap={{
                  scale: 0.8
                }} className={styles.getstartedbutton}>
                  Get Started
                </motion.div>
              </Link>
            </motion.div>
            <motion.img initial={{ x: 1000 }} animate={{ x: 0 }} transition={{ duration: 1.5, type: "spring", mass: 0.3, damping: 7, delay: 1.3 }} className={styles.laptopsvg} src='/svgs/Laptopsvg.svg' />

            <motion.img initial={{ y: -20 }} animate={{ y: 0 }} transition={{ duration: 2 }} src='/svgs/dots.svg' style={{ position: "absolute", top: "2rem", left: "-2rem", width: "16%", height: "auto" }} />
            <motion.img initial={{ y: -20 }} animate={{ y: 0 }} transition={{ duration: 2 }} src='/svgs/dottriangle.svg' style={{ top: "0", left: "60%", width: "3.1%", height: "auto" }} />
            <motion.img initial={{ y: -20 }} animate={{ y: 0 }} transition={{ duration: 2 }} src='/svgs/plus.svg' style={{ top: "35%", left: "50%", width: "1.2%", height: "auto" }} />
            <motion.img src='/svgs/longdots.svg' style={{ bottom: "-30%", right: "5%", width: "15%", height: "auto", y: longdotsAnimation, opacity: longdotsfade }} />
            <motion.img initial={{ y: -20 }} animate={{ y: 0 }} transition={{ duration: 2 }} src='/svgs/inclined lines.svg' style={{ bottom: "15%", left: "2rem", width: "7%", height: "auto" }} />
            <motion.img initial={{ y: -20 }} animate={{ y: 0 }} transition={{ duration: 2 }} src='/svgs/inclined lines.svg' style={{ top: "6em", left: "33%", width: "8%", height: "auto", opacity: "50%" }} />
            <motion.img initial={{ y: -20 }} animate={{ y: 0 }} transition={{ duration: 2 }} src='/svgs/plus2.svg' style={{ top: "7rem", right: "20%", width: "1%", height: "auto" }} />
            <motion.img initial={{ y: -20 }} animate={{ y: 0 }} transition={{ duration: 2 }} src='/svgs/dottriangle2.svg' style={{ top: "5rem", right: "8%", width: "2.5%", height: "auto" }} />
            <motion.img initial={{ y: -20 }} animate={{ y: 0 }} transition={{ duration: 2 }} src='/svgs/plus2.svg' style={{ top: "55%", right: "2%", width: "1%", height: "auto" }} />

            <motion.img initial={{ y: -20 }} animate={{ y: 0 }} transition={{ duration: 2 }} src='/svgs/plus.svg' style={{ bottom: "8.5%", left: "25%", width: "1.3%", height: "auto" }} />
            <motion.img initial={{ y: -20 }} animate={{ y: 0 }} transition={{ duration: 2 }} src='/svgs/dots 2.svg' style={{ top: "70%", right: "45%", width: "12%", height: "auto" }} />
            <motion.img initial={{ y: -20 }} animate={{ y: 0 }} transition={{ duration: 2 }} src='/svgs/circle.svg' style={{ top: "65%", left: "33%", width: "2%", height: "auto" }} />

          </section>

          <motion.section ref={ref} id="about-section" className={styles.aboutsection}>
            <motion.h2 variants={animationVars} initial="hidden" animate={controls} transition={{ duration: 2 }}>
              Who Are We?
           </motion.h2>

            <div className={styles.aboutuscontainer}>
              <motion.div variants={childAnimation} initial="hidden" animate={controls} transition={{ duration: 1, delay: 0.5 }} className={styles.aboutus} style={{ flex: 1 }}>
                <div className={styles.logo}>
                  <div>
                    <img src="/svgs/Logo.svg" />
                  </div>
                  <div>
                    <p>
                      <span id={styles.digigate} style={{ fontSize: "2rem" }}>Digigate</span> Solutions
                    </p>
                  </div>
                </div>
                <p className={styles.bodytext}> We are an IT and software development company based in Ghana with over 20 years of experience 🇬🇭💪🏾</p>

                <p className={styles.bodytextinner}>
                  Our vision is to become one of the world’s leading software development companies, using advanced technologies and ensuring clients satisfaction.
                </p>

              </motion.div>
              <motion.div id={styles.codeSvg} variants={childrightAnimation} initial="hidden" animate={controls} transition={{ duration: 1, delay: 0.8 }} style={{ flex: 1 }}>
                <img src="/svgs/code.svg" style={{ width: "100%", height: "auto", position: "relative", zIndex: "2" }} />
              </motion.div>
            </div>

            <motion.img variants={tinySvg} initial="hidden" animate={controls} transition={{ duration: 2 }} src='/svgs/inclined lines.svg' style={{ top: "-2%", left: "30%", width: "7%", height: "auto" }} />

            <motion.img variants={tinySvg} initial="hidden" animate={controls} transition={{ duration: 2 }} className={styles.technologysvg} src="/svgs/technologies.svg" />
            <motion.img variants={tinySvg} initial="hidden" animate={controls} transition={{ duration: 2 }} src='/svgs/diamond shape.svg' style={{ top: "8%", left: "15%", width: "1.5%", height: "auto", opacity: "70%" }} />

            <motion.img variants={tinySvg} initial="hidden" animate={controls} transition={{ duration: 2 }} src='/svgs/dotsfaded.svg' style={{ top: "25%", left: "-10%", width: "25%", height: "auto" }} />
            <motion.img variants={tinySvg} initial="hidden" animate={controls} transition={{ duration: 2 }} src='/svgs/square1.svg' style={{ top: "35%", right: "43%", width: "3%", height: "auto" }} />
            <motion.img variants={tinySvg1} initial="hidden" animate={controls} transition={{ duration: 2 }} src='/svgs/square1.svg' style={{ bottom: "-25%", left: "-1rem", width: "10%", height: "auto", transform: "rotate(30deg)" }} />
            <motion.img variants={tinySvg} initial="hidden" animate={controls} transition={{ duration: 2 }} src='/svgs/dottriangle.svg' style={{ bottom: "13%", left: "10%", width: "2%", height: "auto", transform: "rotate(45deg)", opacity: "50%" }} />
            <motion.img variants={tinySvg} initial="hidden" animate={controls} transition={{ duration: 2 }} src='/svgs/square1.svg' style={{
              top: "83%", right: "8%", width: "3%", height: "auto", transform: "rotate(60deg)"
            }} />

            <motion.svg xmlns="http://www.w3.org/2000/svg" className={styles.arrowSvg} width="209.845" height="185.983" viewBox="-2 -2 220.845 185.983">
              <motion.path variants={svgVariant} initial="hidden" animate={controls} transition={{ duration: 1.5, delay: 1 }} id="Path_338" data-name="Path 338" d="M3397.078-2756.371a170.566,170.566,0,0,0-64.158,14.186,167.537,167.537,0,0,0-81.852,78.252,151.342,151.342,0,0,0-14.955,46.434,20.445,20.445,0,0,1-.461,2.739,14.825,14.825,0,0,1-2.339-2.092,25.027,25.027,0,0,0-6.462-4.954,8.723,8.723,0,0,1-2.4-2.092,5.542,5.542,0,0,0-1.754-1.631,2.532,2.532,0,0,0-3.108,1.477c-.277.554-.646,1.015-.862,1.015-.862,0-1.016,5.447-.246,9.17.739,3.631,8.216,25.756,12.739,37.726a8.339,8.339,0,0,0,7.785,5.723,6.183,6.183,0,0,0,4.708-1.907,53.39,53.39,0,0,0,3.354-5.632c4.677-8.431,9.939-17.016,16.555-26.895,3.231-4.861,3.723-5.908,3.477-7.446a3.085,3.085,0,0,1,.277-2c1.138-2.185-.031-5.877-2.308-7.385a6.94,6.94,0,0,0-6.339-.492,15.961,15.961,0,0,0-4.892,5.416,3.174,3.174,0,0,1-1.077,1.416,25.32,25.32,0,0,0-2.339,1.723,8.72,8.72,0,0,1-1.816,1.293c-.308-.369,3.662-15.324,6.062-22.709a166.911,166.911,0,0,1,70.5-89.76,178.3,178.3,0,0,1,65.482-24.217c9.416-1.508,13.355-1.815,25.2-1.908,10.309-.062,11.232-.123,11.6-.615.584-.8.492-1.508-.277-2.431-.83-.954-1.969-1.138-10.554-1.815C3410.587-2756.248,3402.71-2756.494,3397.078-2756.371Z" transform="translate(-3217.983 2756.403)" fill="#1b2161" />
            </motion.svg>

          </motion.section>


          <InView threshold={0.5} className={styles.aboutusbottom} as="div" onChange={(inViewElement, entry) => { inViewElement ? controls2.start('visible') : false }}>
            <div className={styles.imageContainer} style={{ width: "50%" }}>
              <motion.img variants={tinySvg} id={styles.peopleworkingsvg} initial="hidden" animate={controls2} transition={{ duration: 2 }} src='/svgs/peopleworking.svg' />
            </div>

            <div className={styles.textcontainer}>
              <h2 style={{ fontSize: "2.2vw", marginBottom: "2rem" }}>Technology-driven</h2>
              <motion.div variants={underlineVariant} initial="hidden" animate={controls2} transition={{ duration: 1 }} style={{ backgroundColor: "rgb(139,153,209)", width: "15%", height: "1vh", borderRadius: "3rem" }}></motion.div>
              <p style={{ fontSize: "1.3vw", color: "var(--lightpurple)", width: "100%", textAlign: "left", paddingTop: "2vh", paddingRight: "5rem" }}>
                Our approach involves the use of technology to address key challenges in the areas of health, agriculture, education and manufacturing. We deal with formal and informal sectors including small scale businesses.
              </p>
            </div>

            <motion.div variants={lightBeamVariant} initial="hidden" animate={controls2} transition={{ duration: 1, delay: 1, ease: [0.6, 0.01, -0.05, 0.9] }} id={styles.lightbeam} style={{ top: "80%", right: "-6rem" }}></motion.div>
            <motion.div variants={lightBeamVariant} initial="hidden" animate={controls2} transition={{ duration: 1, delay: 0.3, ease: [0.6, 0.01, -0.05, 0.9] }} id={styles.lightbeam} style={{ bottom: "-5%", right: "20%" }}></motion.div>
            <img src='/svgs/plus.svg' style={{ top: "60%", left: "2%", width: "1%", height: "auto" }} />
            <img src='/svgs/dots 2.svg' style={{ bottom: "-15%", left: "26%", width: "12%", height: "auto", opacity: "60%" }} />
          </InView>


          <InView triggerOnce={true} threshold={0.1} as="div" id="services" className={styles.servicesStyles} onChange={(inViewElement, entry) => { inViewElement ? controls3.start('visible') : false }}>
            <h2>
              Our Services
            </h2>
            <div className={styles.servicescontainer} style={{ width: "100%", display: "flex", flexDirection: "row", justifyContent: "space-between", padding: "0 5rem", flex: 1 }}>
              <motion.img variants={serviceVariant} initial="hidden" animate={controls3} src='/svgs/service1.svg' transition={{ duration: 0.5, delay: 0.5 }} style={{ position: "relative", width: "32%", height: "auto", display: "inline-block" }} />
              <motion.img variants={serviceVariant} initial="hidden" animate={controls3} src='/svgs/service2.svg' transition={{ duration: 0.5, delay: 1 }} style={{ position: "relative", width: "32%", height: "auto", display: "inline-block" }} />
              <motion.img variants={serviceVariant} initial="hidden" animate={controls3} src='/svgs/service3.svg' transition={{ duration: 0.5, delay: 1.5 }} style={{ position: "relative", width: "32%", height: "auto", display: "inline-block" }} />
            </div>

            <motion.img id={styles.longDots} variants={tinySvg} initial="hidden" animate={controls3} transition={{ duration: 2 }} src="/svgs/longdots.svg" style={{ top: "14%", left: "28%", width: "auto", height: "40vh", opacity: "30%" }} />
            <motion.img variants={tinySvg} initial="hidden" animate={controls3} transition={{ duration: 2 }} src='/svgs/inclined lines.svg' style={{ top: "45%", left: "5%", width: "5%", height: "auto", opacity: "50%" }} />
            <motion.img variants={tinySvg} initial="hidden" animate={controls3} transition={{ duration: 2 }} src='/svgs/dottriangle.svg' style={{ top: "80%", left: "10%", width: "3.2%", height: "auto", opacity: "60%" }} />
            <motion.img variants={tinySvg} initial="hidden" animate={controls3} transition={{ duration: 2 }} src='/svgs/dottriangle.svg' style={{ top: "20%", left: "10%", width: "1.5%", height: "auto", opacity: "60%", transform: "rotate(40deg)" }} />
            <motion.img variants={tinySvg} initial="hidden" animate={controls3} transition={{ duration: 2 }} src='/svgs/square1.svg' style={{ top: "80%", left: "45%", width: "3.2%", height: "auto" }} />
            <motion.img variants={tinySvg} initial="hidden" animate={controls3} transition={{ duration: 2 }} src='/svgs/inclined lines.svg' style={{ top: "70%", right: "5%", width: "8%", height: "auto", opacity: "30%" }} />
            <motion.img variants={tinySvg} initial="hidden" animate={controls3} transition={{ duration: 2 }} src='/svgs/circle.svg' style={{ top: "26%", right: "10%", width: "2%", height: "auto", opacity: "50%" }} />
            <motion.img variants={tinySvg} initial="hidden" animate={controls3} transition={{ duration: 2 }} src='/svgs/plus2.svg' style={{ top: "34%", left: "55%", width: "1.4%", height: "auto", opacity: "10%" }} />


            <motion.svg className={styles.arrowSvg2} xmlns="http://www.w3.org/2000/svg" width="258.695" height="287.135" viewBox="0 0 258.695 287.135">
              <motion.path variants={svgVariant2} initial="hidden" animate={controls3} transition={{ duration: 2 }} id="Path_353" data-name="Path 353" d="M710.75-727.675c-14.738,1.863-30.821,10.989-42.447,24.147-6.768,7.664-10.612,13.064-24.171,34.075-7.122,10.989-9.527,14.432-12.9,18.3-5.99,6.933-11.673,10.352-17.144,10.352-6.2,0-11.838-4.127-19.431-14.267a219.794,219.794,0,0,1-12.545-18.983c-7.664-12.5-10.352-16.224-14.974-20.87-9.9-9.928-20.7-12.4-32.589-7.428-10.706,4.48-21.553,15.682-27.661,28.628a62.106,62.106,0,0,0-5.825,21.6c-.142,2.405-.118,2.523.448,3.16a2.119,2.119,0,0,0,1.745.778c1.91.189,2.24-.259,3.278-4.5,3.278-13.512,9.527-25,18.063-33.3a41.147,41.147,0,0,1,10.706-7.923c6.131-3.042,11.343-3.679,16.389-1.957,3.679,1.25,6.3,3.16,9.716,7.145,3.985,4.646,6.674,8.89,12.97,20.563a167.155,167.155,0,0,0,9.267,15.823c5.235,7.805,9.6,12.758,14.267,16.295,7.923,5.943,16.931,7.4,25.4,4.056,4.386-1.721,8.277-4.5,13.064-9.267,6.226-6.225,10.659-12.357,19.455-26.906,9.126-15.092,15.965-24.218,24.6-32.778,12.8-12.734,25.845-18.7,38.579-17.686,10.187.825,18.724,5.117,27.237,13.654,5.99,5.99,9.291,10.541,17.38,23.841,4.056,6.673,9.48,15.8,9.385,15.8-.071,0-1.25-.755-2.641-1.674-3.679-2.429-5-3.042-6.485-3.042a4.341,4.341,0,0,0-4.622,3.985,2.554,2.554,0,0,0,.472,2.075c.59.825,3.608,3.231,11.036,8.8,2.665,2,6.414,4.834,8.324,6.32a46.311,46.311,0,0,0,4.363,3.042,6.278,6.278,0,0,0,2.641.259,4.272,4.272,0,0,0,2.783-.731c2.429-1.6,2.853-3.584,1.839-8.7-.33-1.721-1.368-7.64-2.264-13.135-1.533-9.15-2.924-16.507-3.537-18.676-.66-2.335-2.358-3.514-5.046-3.514a4.559,4.559,0,0,0-2.9.707c-2.335,1.344-2.712,3.066-1.863,8.654.212,1.344.377,2.57.377,2.712a40.929,40.929,0,0,1-2.547-4.528c-10.305-19.549-18.276-29.547-29.642-37.141A46.711,46.711,0,0,0,710.75-727.675Z" transform="translate(-805.057 68.845) rotate(51)" fill="#1b2161" />
            </motion.svg>

          </InView>




          <section id={styles.ourteam}>
            <img src='/svgs/technology Network.svg' id={styles.technetworksvg} style={{ width: "50%", height: "auto", left: "-5%", opacity: "65%" }} />
            <div className={styles.heading}>
              <h2>
                Meet Our Team
            </h2>
              <p>
                Digigate solutions has a team of dedicated individuals who have experience in information systems development and mentorship. Our dedication brings high performance and efficient software-delivery.
              </p>
            </div>
            <div className={styles.teamcontainer}>
              <motion.div className={styles.card} style={{ y: y2 }}>

                <div className={styles.avatar}>
                </div>

                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", paddingTop: "5rem", backgroundColor: "white" }}>
                  <span style={{ color: "#32407B", padding: "1rem 0", fontSize: "1.4rem" }}>Benjamin Ako Afrasah</span>
                  <span style={{ color: "rgba(21,24,97,0.49)" }}>Lead Software Engineer</span>
                  <p id={styles.teamBodytext} style={{ color: "rgba(21,24,97,0.49)", width: "80%", paddingTop: "2rem", marginBottom: "5rem", fontSize: "1.2rem", textAlign: "center" }}>
                    I spearhead mobile app development at Digigate indulging all my experience working with companies in both the USA & Ghana.
                  </p>
                </div>
              </motion.div>
              <motion.div id={styles.ceoCard} className={styles.card} style={{ display: "relative", top: "3rem", y: y1 }}>

                <div className={styles.avatar}>
                </div>

                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", paddingTop: "5rem", backgroundColor: "white" }}>
                  <span style={{ color: "#32407B", padding: "1rem 0", fontSize: "1.4rem" }}>Joseph Sakyi Baah</span>
                  <span style={{ color: "rgba(21,24,97,0.49)" }}>CEO</span>
                  <p id={styles.teamBodytext} style={{ color: "rgba(21,24,97,0.49)", width: "80%", paddingTop: "2rem", marginBottom: "5rem", fontSize: "1.2rem", textAlign: "center" }}>
                    I have worked for over 12 years developing E-health & telemedicine systems for institutions all across West Africa.
                  </p>
                </div>
              </motion.div>
              <motion.div id={styles.timothyCard} className={styles.card} style={{ y: y2 }}>
                <div className={styles.avatar}>
                </div>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", paddingTop: "5rem", backgroundColor: "white" }}>
                  <span style={{ color: "#32407B", padding: "1rem 0", fontSize: "1.4rem" }}>Timothy Kofi Amo</span>
                  <span style={{ color: "rgba(21,24,97,0.49)" }}>Lead Frontend Engineer</span>
                  <p id={styles.teamBodytext} style={{ color: "rgba(21,24,97,0.49)", width: "80%", paddingTop: "2rem", marginBottom: "5rem", fontSize: "1.2rem", textAlign: "center" }}>
                    I develop web applications at Digigate with the sole aim of giving the best user experience and high performance systems.
                  </p>
                </div>
              </motion.div>
            </div>


            <div style={{ textAlign: "center", marginTop: "3rem", paddingBottom: "3rem" }}>
              <span style={{ fontSize: "1.2rem", color: "rgba(58,62,144,0.73)" }}> Ask our clients </span>
              <div id={styles.companyLogos} className="company-logos" style={{ display: "flex", justifyContent: "space-evenly", paddingTop: "4rem", width: "70%", marginRight: "auto", marginLeft: "auto", alignItems: "center" }} >
                <img src="/svgs/google-2015.svg" />
                <img src="/svgs/Netlify-02.svg" />
                <img src="/svgs/TechCrunch-01.svg" />
                <img src="/svgs/Airbnb.svg" />
                <img src="/svgs/Nike.svg" />
                <img src="/svgs/Amazon-02.svg" />

              </div>
            </div>
          </section>


          <InView threshold={0} as="div" onChange={(inViewElement, entry) => { inViewElement ? controls4.start('visible') : false }} id="contact-us" className={styles.contactus}>
            <div className={styles.contactuscontainer}>
              <div style={{ display: "flex", flexDirection: "column", flex: "60%" }}>
                <h1 style={{ fontSize: "3rem", color: "#1A1E67", textAlign: "left", marginBottom: "0em" }}>
                  Got a project?
                </h1>
                <h2 style={{ fontSize: "2rem", color: "#429DB4", textAlign: "left", marginBottom: "6rem" }}>
                  Let's hear it.
                </h2>
                <img ref={svgElement} className={styles.sendmessageSvg} src="/svgs/send us a message.svg" style={{ position: "relative", width: "70%", height: "auto", zIndex: 2 }} />
              </div>

              <form className={styles.contactform} action="#" method="post" onSubmit={formik.handleSubmit} style={{ flex: "40%", display: "flex", flexDirection: "column", justifyContent: "space-evenly", padding: "2rem 0" }}>
                <span style={{ fontSize: "2rem", textAlign: "left", color: "#32407B", fontWeight: 600, paddingBottom: "1rem" }}> Get in touch</span>
                <span style={{ fontSize: "1.2rem", color: "rgba(27,31,111,0.44)", width: "80%", fontWeight: 500, textAlign: "left", marginBottom: "2rem" }}>
                  You made it here means you’re interested.
Describe your idea in a few words and lets make it a reality. </span>

                <input type="text" placeholder="Name" onChange={formik.handleChange} name="name" value={formik.values.name} required />
                <input type="email" placeholder="Email" onChange={formik.handleChange} name="email" value={formik.values.email} required />
                <input type="text" placeholder="Telephone" onChange={formik.handleChange} name="telephone" value={formik.values.telephone} required />
                <textarea type="textarea" className={styles.messageArea} placeholder="Message" rows="5" onChange={formik.handleChange} name="message" value={formik.values.message} required />
                <input id={styles.submit} type="submit" />
              </form>
            </div>

            <motion.img id={styles.bigCircle} variants={contactSvgVariant} initial="hidden" animate={controls4} transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }} src="/svgs/big circle.svg" style={{ width: "30%", height: "auto", top: "-20%", left: "-16%" }} />
            <motion.img variants={contactSvgVariant} initial="hidden" animate={controls4} transition={{ duration: 1, ease: "easeInOut", delay: 1.4 }} src="/svgs/dotsfaded.svg" style={{ width: "24%", height: "auto", top: "55%", left: "-5%", opacity: "50%" }} />
            <motion.img variants={contactSvgVariant} initial="hidden" animate={controls4} transition={{ duration: 1, ease: "easeInOut", delay: 0.4 }} src="/svgs/bigcircle2.svg" style={{ width: "1%", height: "auto", top: "14%", right: "6%" }} />
            <motion.img variants={contactSvgVariant} initial="hidden" animate={controls4} transition={{ duration: 1, ease: "easeInOut", delay: 0.8 }} src="/svgs/circle3.svg" style={{ width: "1.4%", height: "auto", top: "5%", left: "45%" }} />
            <motion.img variants={contactSvgVariant} initial="hidden" animate={controls4} transition={{ duration: 1, ease: "easeInOut", delay: 0.4 }} src="/svgs/inclinedlines2.svg" style={{ width: "4%", height: "auto", top: "88%", left: "35%" }} />
            <motion.img variants={contactSvgVariant} initial="hidden" animate={controls4} transition={{ duration: 1, ease: "easeInOut", delay: 1 }} src="/svgs/line.svg" style={{ width: "5%", height: "auto", top: "82%", left: "8%" }} />
            <motion.img variants={contactSvgVariant} initial="hidden" animate={controls4} transition={{ duration: 1, ease: "easeInOut", delay: 0.6 }} src="/svgs/line.svg" style={{ width: "5%", height: "auto", top: "80%", left: "12%" }} />
            <motion.img variants={contactSvgVariant} initial="hidden" animate={controls4} transition={{ duration: 1, ease: "easeInOut", delay: 1.2 }} src="/svgs/bigcircle2.svg" style={{ width: "5%", height: "auto", top: "85%", left: "10%" }} />
            <motion.img variants={contactSvgVariant} initial="hidden" animate={controls4} transition={{ duration: 1, ease: "easeInOut", delay: 0.9 }} src="/svgs/wiggle.svg" style={{ width: "1.5%", height: "auto", top: "90%", left: "8%", transform: "rotate(0deg)" }} />
            <motion.img variants={contactSvgVariant} initial="hidden" animate={controls4} transition={{ duration: 1, ease: "easeInOut", delay: 1 }} src="/svgs/line.svg" style={{ width: "5%", height: "auto", top: "92%", left: "10%" }} />
            <motion.img variants={contactSvgVariant} initial="hidden" animate={controls4} transition={{ duration: 1, ease: "easeInOut", delay: 1.4 }} src="/svgs/concentric-circle.svg" style={{ width: "15%", height: "auto", top: "40%", right: "-8%" }} />
            <motion.img variants={contactSvgVariant} initial="hidden" animate={controls4} transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }} src="/svgs/diamond shape.svg" style={{ width: "5%", height: "auto", top: "95%", left: "65%", transform: "rotate(135deg)" }} />
            <motion.img variants={contactSvgVariant} initial="hidden" animate={controls4} transition={{ duration: 1, ease: "easeInOut", delay: 0.3 }} src="/svgs/diamond shape.svg" style={{ width: "1%", height: "auto", top: "25%", left: "15%" }} />
            <motion.img variants={contactSvgVariant} initial="hidden" animate={controls4} transition={{ duration: 1, ease: "easeInOut", delay: 1 }} src="/svgs/wiggle.svg" style={{ width: "4%", height: "auto", top: "28%", left: "45%", transform: "rotate(50deg)" }} />
            <motion.img variants={contactSvgVariant} initial="hidden" animate={controls4} transition={{ duration: 1, ease: "easeInOut", delay: 1 }} src="/svgs/line.svg" style={{ width: "5%", height: "auto", top: "5%", right: "1%" }} />
            <motion.img variants={contactSvgVariant} initial="hidden" animate={controls4} transition={{ duration: 1, ease: "easeInOut", delay: 0.7 }} src="/svgs/line.svg" style={{ width: "4%", height: "auto", top: "12%", right: "-1%" }} />
            <motion.img variants={contactSvgVariant} initial="hidden" animate={controls4} transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }} src="/svgs/wiggle.svg" style={{ width: "3%", height: "auto", top: "10%", right: "2%" }} />
          </InView>

          <Footer />

        </div>
      </div>
    </div>
  )
}
