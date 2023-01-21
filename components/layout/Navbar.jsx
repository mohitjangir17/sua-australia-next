import styles from "./Navbar.module.css";
import ToggleDisplay from "react-toggle-display";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import Script from "next/script";

function Navbar() {
  const [show, setShow] = useState(false);

  function handleClick() {
    setShow(!show);
  }
  return (
    <>
      <div className={styles.LogoSection}>
        <div className={styles.headerBar}>
          <Link href="/">
            <Image
              src="/resources/logo512.png"
              width={150}
              height={150}
              alt="logo"
            />
          </Link>{" "}
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
                <Link href="/login">Login</Link>
              </div>
            </ToggleDisplay>
          </nav>
          <nav className={styles.desktopNavbar}>
            <Link href="/">Home</Link>
            <Link href="/assignment-query">Assignment Query</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/blogs">Blogs</Link>
            <Link href="https://app.swipeupassignments.com/auth/signin">
              Login
            </Link>
          </nav>
        </div>
      </div>
      <div className={styles.logoSectionScrolled} id="logoSectionScrolled">
        <div className={styles.headerBar}>
          <Link href="/">
            <Image
              src="/resources/logo512.png"
              width={150}
              height={150}
              alt="logo"
            />
          </Link>{" "}
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
                <Link href="/login">Login</Link>
              </div>
            </ToggleDisplay>
          </nav>
          <nav className={styles.desktopNavbar}>
            <Link href="/">Home</Link>
            <Link href="/assignment-query">Assignment Query</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/blogs">Blogs</Link>
            <Link href="https://app.swipeupassignments.com/auth/signin">
              Login
            </Link>
          </nav>
        </div>
      </div>
      <Script id="scroll">
        {`  window.addEventListener('scroll', function() {
            if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
              document.getElementById("logoSectionScrolled").style.opacity = "1";
              document.getElementById("logoSectionScrolled").style.transform = "translate(0%, 0%)";
            } else {
              document.getElementById("logoSectionScrolled").style.opacity = "0";
              document.getElementById("logoSectionScrolled").style.transform = "translate(0%, -100%)";
            }
          });
        `}
      </Script>
    </>
  );
}

export default Navbar;
