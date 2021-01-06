import styles from '../styles/footer.module.css';

export default function Footer() {
    return (
        <div className={styles.footer}>
            <h3>
                Let's work together
            </h3>
            <p>
                Pioneering digital solutions for all sectors
            </p>
            <div className={styles.footercontainer} style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", paddingTop: "2%", paddingBottom: "10%" }}>
                <div className={styles.logo}>
                    <img src='svgs/Logo.svg' />
                    <div className={styles.logotext}>
                        <span >Digigate</span>
                        <span> Solutions</span>
                    </div>
                </div>
                <div className={styles.linkscontainer}>
                    <div className={styles.linklist}>
                        <h3>Sitemap</h3>
                        <ul>
                            <a href="#">
                                <li>
                                    Home
                        </li>
                            </a>
                            <a href="#">
                                <li>
                                    About
                        </li>
                            </a>
                            <a href="#">
                                <li>
                                    Services
                        </li>
                            </a>
                            <a href="#">
                                <li>
                                    Contact
                        </li>
                            </a>
                        </ul>
                    </div>
                    <div className={styles.linklist}>
                        <h3>
                            Legal
                    </h3>
                        <ul>
                            <li>
                                Terms
                        </li>
                            <li>
                                Privacy
                        </li>
                            <li>
                                Copyright
                        </li>
                        </ul>
                    </div>
                    <div id={styles.projects} className={styles.linklist}>
                        <h3>
                            Projects
                    </h3>
                        <ul>
                            <li>
                                Learn more
                        </li>
                        </ul>
                    </div>
                    <div className={styles.linklist}>
                        <h3>
                            Connect
                        </h3>
                        <ul>
                            <li>
                                <a href="mailto:digigatesolutionsltd@gmail.com">
                                    digigatesolutionsltd@gmail.com
                                </a>
                            </li>
                            <li>
                                +233 (0) 26 928 7004

                            </li>
                            <li>
                                <div id={styles.logolist}>

                                    <img src="svgs/twitter.svg" />
                                    <img src="svgs/linkedin.svg" />
                                    <img src="svgs/facebook.svg" />

                                </div>
                            </li>
                        </ul>
                    </div>


                </div>
            </div>
            <img id={styles.concentricBig} src="svgs/concentric-circle2.svg" style={{ width: "50%", height: "auto", top: "20%", left: "", zIndex: "1" }} />
            <img src="svgs/concentric-circle2.svg" style={{ width: "10%", height: "auto", top: "5%", right: "10%" }} />
        </div>
    )
}