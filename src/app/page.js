import Image from "next/image";
import styles from "./page.module.css";
import "./css/home.css";

export default function Home() {
  return (
    <nav>
     <h1>Logo</h1>
     <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/about">About</a></li>
      <li><a href="#">Contact</a></li>
     </ul>
    </nav>
  );
}
