// import { Facebook, Twitter, Instagram } from "react-bootstrap-icons";
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.row}>
                <div className={styles.section1}>
                    <h4>About Us</h4>
                    <p>
                        Welcome to Team 1 Poros
                    </p>
                </div>
                <div className={styles.section2}>
                    <div className={styles.section2a}>
                    <h4>Quick Links</h4>
                    <ul>
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#">About Us</a>
                        </li>
                        {/* Add more links as needed */}
                    </ul>

                    </div>
                    <div className={styles.contact}>
                    <h4>Contact Us</h4>
                    <p>Email: info@example.com</p>
                    <p>Phone: +123456789</p>

                    </div>

                </div>
            </div>
            <p className={styles.copyright}> &copy;2024 Copyright Ecommerce</p>
        </footer>
    );
};

export default Footer;