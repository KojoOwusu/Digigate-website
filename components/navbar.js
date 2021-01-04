import styles from '../styles/navbar.module.css';
import { Link, animateScroll as scroll, ScrollLink } from "react-scroll";


export default function Navbar(props) {
    const { scrolledState, modalOpenHandler } = props;

    return (

        <div className={scrolledState ? styles.navsticky : styles.navbar}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <img src='/svgs/Logo.svg' alt="logo" />
                Digigate
                </div>

                <ul>
                    <li><Link id={styles.navlink} smooth={true} spy={true} to="home" activeClass={styles.linkactive}> Home  </Link></li>
                    <li><Link id={styles.navlink} smooth={true} spy={true} to="about-section" activeClass={styles.linkactive}> About</Link></li>
                    <li><Link id={styles.navlink} smooth={true} spy={true} to="services" activeClass={styles.linkactive}> Services</Link></li>
                    <li>
                        <Link id={styles.navlink} smooth={true} to="contact-us">
                            <div className={styles.contactbutton}>
                                Contact us
                            </div>
                        </Link>

                    </li>
                </ul>
                <img src="/svgs/hamburger.svg" alt="hamburger" className={styles.hamburgericon} onClick={modalOpenHandler} />

            </div>


        </div>
    )
}

