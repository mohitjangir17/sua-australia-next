// import { Link, useLocation } from "react-router-dom";
import Link from "next/link";
// import "../styles/header.css";
// import LogoSection from "./LogoSection";
import Navbar from "./layout/Navbar";
import styles from "../styles/Home.module.css";

function HeaderOtherPages(props) {
  const img = props.headerImage.src;
  return (
    <div
      className={styles.HeaderOtherPages}
      style={{
        backgroundImage: `url(${img})`,
      }}
    >
      {/* <LogoSection /> */}
      <Navbar />
      <div className={styles.pageIndicator}>
        <h3>
          <Link href="/">Home/</Link>
        </h3>
        <h1>{props.title}</h1>
      </div>
    </div>
  );
}

export default HeaderOtherPages;
