import Link from "next/link";
import styles from "./css/Navbar.module.css"; // Crie um CSS dedicado para a navbar

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <h1 className={styles.logo}>Logo</h1>
      <ul className={styles.navLinks}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/contato">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
