import styles from "./Navbar.module.css";
import ToggleDisplay from "react-toggle-display";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

function Navbar() {
  const [show, setShow] = useState(false);

  function handleClick() {
    setShow(!show);
  }
  return (
    <>
      <div className={styles.LogoSection}>
        <div className={styles.poster}>
          <Link href="/">
            <Image
              src="/resources/logo512.png"
              width={150}
              height={150}
              alt="logo"
            />
          </Link>{" "}
          <div className={styles.sociaLogos}>
            <a href="https://facebook.com">
              {/* <FontAwesomeIcon className="socialIconn" icon={faFacebook} /> */}
            </a>
            <a href="https://facebook.com">
              {/* <FontAwesomeIcon className="socialIconn" icon={faInstagram} /> */}
            </a>
          </div>{" "}
        </div>
      </div>
      <div className={styles.Navbar}>
        <nav className={styles.mobileNavbar}>
          <p onClick={handleClick}>Menu</p>
          <ToggleDisplay show={show}>
            <div className={styles.navlist}>
              <Link href="/">Home</Link>
              <Link href="/assignment-query">Assignment Query</Link>
              <Link href="/contact">Contact</Link>
              <Link href="/blogs">Blogs</Link>
            </div>
          </ToggleDisplay>
        </nav>
        <nav className={styles.desktopNavbar}>
          <Link href="/">Home</Link>
          <Link href="/assignment-query">Assignment Query</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/blogs">Blogs</Link>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
