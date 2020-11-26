import styles from '../styles/navbar.module.css';

export default function Navbar() {
    return (
        <div className={styles.navbar}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <img src='/svgs/Logo.svg' alt="Digigate logo" />
                Digigate
            </div>
                <nav>
                    <ul>
                        <li><a href="#home"> Home</a></li>
                        <li><a href="#about-section">About</a></li>
                        <li><a href="#">Services</a></li>
                        <a href="#">
                            <div className={styles.contactbutton}>
                                Contact us
                            </div>
                        </a>
                    </ul>
                </nav>
            </div>


        </div>)
}

