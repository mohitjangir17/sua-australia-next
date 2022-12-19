import Link from "next/link";
import { useRouter } from "next/router";
// import "../styles/header.css";
// import LogoSection from "./LogoSection";
import Navbar from "./layout/Navbar";
import styles from "../styles/Home.module.css";

function HeaderOtherPages(props) {
  const img = props.headerImage.src;

  const currentRoute = useRouter().pathname;

  return (
    <div className={styles.HeaderOtherPages}>
      <div
        style={{
          backgroundImage: `url(${img})`,
        }}
        className={styles.headerotherOverlay}
      ></div>
      {/* <LogoSection /> */}
      <Navbar />
      <div className={styles.pageIndicator}>
        <h3>
          <Link href="/">Home </Link>
          <span>{currentRoute}</span>
        </h3>
        <h1>{props.title}</h1>
      </div>
    </div>
  );
}

export default HeaderOtherPages;
