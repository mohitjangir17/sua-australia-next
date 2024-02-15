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
        <Link href="/">
          <Image
            className={styles.footerLogo}
            src="/resources/logo512.png"
            width={150}
            height={150}
            alt="logo"
          />
        </Link>
        {/* <h3>About</h3> */}
        <p>
          EasyLekh utilizes the expertise of its team to offer quality services
          to its clients. Our key motive is to provide such Help that the
          student achieves the best in class results.
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
        <h3>Help Desk</h3>
        <div className={styles.exploreLinks}>
          <Link href="/assignment-query">
            <span>
              <Image width={25} src={arrow} alt="" />
            </span>
            Assignment Expert
          </Link>
          {/* <Link href="https://app.swipeupassignments.com/auth/signin">
            <span>
              <Image width={25} src={arrow} alt="" />
            </span>
            Login
          </Link> */}
          {/* <Link href="https://app.swipeupassignments.com/auth/signup">
            <span>
              <Image width={25} src={arrow} alt="" />
            </span>
            Sign Up
          </Link> */}
          <Link href="/contact">
            <span>
              <Image width={25} src={arrow} alt="" />
            </span>
            Contact Us
          </Link>
          <Link href="/refund-policies">
            <span>
              <Image width={25} src={arrow} alt="" />
            </span>
            Refund Policy
          </Link>
          <Link href="/privacy-policy">
            <span>
              <Image width={25} src={arrow} alt="" />
            </span>
            Privacy Policy
          </Link>
          <Link href="/terms&conditions">
            <span>
              <Image width={25} src={arrow} alt="" />
            </span>
            Terms & Conditions
          </Link>
        </div>
      </div>
      <div className={styles.footerColumns}>
        <h3>Our Services</h3>
        <div className={styles.linksCol}>
          <Link
            href={{
              pathname: "https://swipeupassignments.com/assignment-help",
            }}
            target="_blank"
          >
            <span>
              <Image width={25} src={arrow} alt="" />
            </span>
            Assignment Help
          </Link>
          <Link
            href={{
              pathname: "https://swipeupassignments.com/exam-help",
            }}
            target="_blank"
          >
            <span>
              <Image width={25} src={arrow} alt="" />
            </span>
            Exam Help
          </Link>
          <Link
            href={{
              pathname: "https://swipeupassignments.com/essay-help",
            }}
            target="_blank"
          >
            <span>
              <Image width={25} src={arrow} alt="" />
            </span>
            Essay Help
          </Link>
          <Link
            href={{
              pathname: "https://swipeupassignments.com/dissertation-help",
            }}
            target="_blank"
          >
            <span>
              <Image width={25} src={arrow} alt="" />
            </span>
            Dissertation Help
          </Link>
          <Link
            href={{
              pathname: "https://swipeupassignments.com/thesis-paper-help",
            }}
            target="_blank"
          >
            <span>
              <Image width={25} src={arrow} alt="" />
            </span>
            Thesis Paper Help
          </Link>
          <Link
            href={{
              pathname: "https://swipeupassignments.com/programming-help",
            }}
            target="_blank"
          >
            <span>
              <Image width={25} src={arrow} alt="" />
            </span>
            Programming Help
          </Link>
        </div>
      </div>
      <div className={styles.footerColumns}>
        <h3>Get In Touch</h3>
        <div className={styles.questionsCol}>
          <p>
            {" "}
            <span>
              <Image width={25} src={arrow} alt="" />
            </span>
            Praveen Kumar Jangir
          </p>
          <p>
            {" "}
            <span>
              <Image width={25} src={arrow} alt="" />
            </span>
            5F-31 Mahima Trinity Mall, Sodala
            Jaipur, Rajasthan, India (302019)
          </p>
          <a href="tel:9672378728">
            <span>
              <Image width={25} src={arrow} alt="" />
            </span>
            +91-9672378728
          </a>
          <a href="mailto: easylekh@gmail.com">
            <span>
              <Image width={25} src={arrow} alt="" />
            </span>
            easylekh@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
