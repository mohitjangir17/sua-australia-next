import styles from "./Footer.module.css";
import arrow from "../../public/resources/arrow.png";
import Link from "next/link";
import Image from "next/image";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
// import
//   faFacebook,
//   faTwitter,
//   faInstagram,
//  from "@fortawesome/free-brands-svg-icons";
function Footer() {
  return (
    <div className={styles.Footer}>
      <div className={styles.footerColumns}>
        <Link href="/sua">
          <Image
            className={styles.footerLogo}
            src="/resources/logo512.png"
            width={150}
            height={150}
            alt="logo"
          />
        </Link>
        <p>
          A small river named Duden flows by their place <br />
          and supplies it with the necessary regelialia.
        </p>

        <div className={styles.footerSocialIcons}>
          <a href="https://instagram.com">
            {/* <FontAwesomeIcon className="socialIconnFooter" icon={faInstagram} /> */}
          </a>
          <a href="https://facebook.com">
            {/* <FontAwesomeIcon className="socialIconnFooter" icon={faFacebook} /> */}
          </a>
          <a href="https://twitter.com">
            {/* <FontAwesomeIcon className="socialIconnFooter" icon={faTwitter} /> */}
          </a>
        </div>
      </div>
      <div className={styles.footerColumns}>
        <h3>Explore</h3>
        <div className={styles.exploreLinks}>
          <Link href="#">
            <span>
              <Image width={25} src={arrow} alt="" />
            </span>
            About Us
          </Link>
          <Link href="#">
            <span>
              <Image width={25} src={arrow} alt="" />
            </span>
            Services
          </Link>
          <Link href="#">
            <span>
              <Image width={25} src={arrow} alt="" />
            </span>
            Cources
          </Link>
          <Link href="#">
            <span>
              <Image width={25} src={arrow} alt="" />
            </span>
            Blogs
          </Link>
          <Link href="#">
            <span>
              <Image width={25} src={arrow} alt="" />
            </span>
            Contact Us
          </Link>
        </div>
      </div>
      <div className={styles.footerColumns}>
        <h3>Our Links</h3>
        <div className={styles.linksCol}>
          <Link href="#">
            <span>
              <Image width={25} src={arrow} alt="" />
            </span>
            Contact Us
          </Link>
          <Link href="#">
            <span>
              <Image width={25} src={arrow} alt="" />
            </span>
            Pricing
          </Link>
          <Link href="#">
            <span>
              <Image width={25} src={arrow} alt="" />
            </span>
            Terms & Conditions
          </Link>
          <Link href="#">
            <span>
              <Image width={25} src={arrow} alt="" />
            </span>
            Privacy
          </Link>
          <Link href="#">
            <span>
              <Image width={25} src={arrow} alt="" />
            </span>
            Feedbacks
          </Link>
        </div>
      </div>
      <div className={styles.footerColumns}>
        <h3>Have Questions?</h3>
        <div className={styles.questionsCol}>
          <p>
            {" "}
            <span>
              <Image width={25} src={arrow} alt="" />
            </span>
            203 Fake St. Mountain View, San Francisco, California, USA
          </p>
          <a href="tel:123-456-7890">
            <span>
              <Image width={25} src={arrow} alt="" />
            </span>
            123-456-7890
          </a>
          <a href="mailto: support@swipeupassignments.com">
            <span>
              <Image width={25} src={arrow} alt="" />
            </span>
            support@swipeupassignments.com
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
