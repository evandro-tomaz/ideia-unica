import Link from "next/link";
import styles from '../styles/Navbar.module.css'

function Navbar() {
    return (
        <div>
            <nav className={styles.container}>
                <Link href="/">Home</Link>
                <Link href="/sobre">Sobre</Link>
                <Link href="/blog">Blog</Link>
            </nav>
        </div>
    );
}

export default Navbar;