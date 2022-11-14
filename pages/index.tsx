import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Blogs from "../components/Blogs";
import CountUp from "react-countup";
import HeaderText from "../components/HeaderText";
import { FC } from "react";

import bookicon from "../public/resources/book-logo.png";
import itemsDelivered from "../public/resources/delivered.png";
import teamLogo from "../public/resources/teamwork.png";
import customerLogo from "../public/resources/target.png";
import ratingLogo from "../public/resources/rating.png";
import assignment_help from "../public/resources/assignment help.png";
import dissertation_help from "../public/resources/dissertation help.png";
import essay_help from "../public/resources/essay help.png";
import exam_help from "../public/resources/exam help.png";
import programming_help from "../public/resources/programming help.png";
import thesis_help from "../public/resources/thesis help.png";
import feature1 from "../public/resources/support-1.png";
import feature2 from "../public/resources/support-2.png";
import feature3 from "../public/resources/support-3.png";
import feature4 from "../public/resources/support-4.png";
import feature5 from "../public/resources/support-5.png";
import feature6 from "../public/resources/support-6.png";
import Navbar from "../components/layout/Navbar";

function FadeInWhenVisible({ children }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{
        duration: 1,
        delay: 0.3,
        ease: [0, 0.5, 0.7, 1.01],
      }}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 50 },
      }}
    >
      {children}
    </motion.div>
  );
}

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1280 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 1280, min: 768 },
    items: 3,
    slidesToSlide: 2,
  },
  tablet: {
    breakpoint: { max: 768, min: 600 },
    items: 2,
    slidesToSlide: 2,
  },
  mobile: {
    breakpoint: { max: 600, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

export default function Home() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");

  // const storage = sessionStorage;

  // useEffect(() => {
  //    if (storage.getItem("firstname")) {
  //      setFirstname(storage.getItem("firstname"));
  //    }
  //    if (storage.getItem("lastname")) {
  //      setLastname(storage.getItem("lastname"));
  //    }
  //    if (storage.getItem("email")) {
  //      setEmail(storage.getItem("email"));
  //    }
  //    if (storage.getItem("subject")) {
  //      setSubject(storage.getItem("subject"));
  //    }
  // }, [storage]);
  // useEffect(() => {
  //   storage.setItem("firstname", firstname);
  //   storage.setItem("lastname", lastname);
  //   storage.setItem("email", email);
  //   storage.setItem("subject", subject);
  // }, [firstname, lastname, email, subject, storage]);

  const [testimonialsData, setTestimonialsData] = useState([
    {
      id: 1,
      reviewerName: "Roger ",
      courseName: "Web Development",
      reviewDescription:
        "1 Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    },
    {
      id: 2,
      reviewerName: "Roger ",
      courseName: "DBMS",
      reviewDescription:
        "2 Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    },
    {
      id: 3,
      reviewerName: "Roger ",
      courseName: "JS",
      reviewDescription:
        "3 Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    },
    {
      id: 4,
      reviewerName: "Roger ",
      courseName: "React",
      reviewDescription:
        "4 Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.",
    },
  ]);
  return (
    <div className={styles.container}>
      <Head>
        <title>Home | SUA-Australia</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <section className={styles.Header}> */}
      <div
        className={styles.Header1}
        style={{
          backgroundImage: `url('/resources/mainBanner.jpg')`,
        }}
      ></div>
      <Navbar />
      <HeaderText />
      {/* </section> */}
      <div className={styles.whiteBg}>
        {/* ------------------------------Upload Form--------------------------------- */}
        <div className={styles.UploadForm}>
          <form
            action="/upload"
            // method="post"
          >
            <label htmlFor="fistname">Firstname</label> <br />
            <input
              type="text"
              name="firstname"
              value={firstname}
              placeholder="Your Firstname"
              onChange={(e) => setFirstname(e.target.value)}
            />{" "}
            <br />
            <label htmlFor="lastname">Lastname</label> <br />
            <input
              type="text"
              name="lastname"
              value={lastname}
              placeholder="Your Lastname"
              onChange={(e) => setLastname(e.target.value)}
            />{" "}
            <br />
            <label htmlFor="email">Email address</label> <br />
            <input
              type="text"
              name="email"
              value={email}
              placeholder="Your Email"
              onChange={(e) => setEmail(e.target.value)}
            />{" "}
            <br />
            <label htmlFor="subject">Subject</label> <br />
            <input
              type="text"
              name="subject"
              value={subject}
              placeholder="Query Subject"
              onChange={(e) => setSubject(e.target.value)}
            />{" "}
            <br /> <br />
            {/* <Link href="/upload">Get Help</Link> */}
            <button type="submit">Get Help</button>
          </form>
        </div>
        <section className={styles.whiteBackground}>
          {/* -----------------------Benifits-------------------------------------------- */}
          <FadeInWhenVisible>
            <div className={styles.Benifits}>
              <div
                className={styles.benifitsImg}
                style={{
                  backgroundImage: `url('/resources/girlVector.png')`,
                }}
              >
                {" "}
                {/* <Image src={womanImg} alt="" />{" "} */}
              </div>
              <div className={styles.benifitsContent}>
                <span>Expertise in every field</span>
                <h3> Benifits of working with us</h3>
                <div>
                  <Image src={bookicon} alt="Img" />
                  <div>
                    <h3>Online Courses</h3>
                    <p>
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts.
                    </p>
                  </div>
                </div>
                <div>
                  <Image src={bookicon} alt="Img" />
                  <div>
                    <h3>Online Courses</h3>
                    <p>
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts.
                    </p>
                  </div>
                </div>
                <div>
                  <Image src={bookicon} alt="Img" />
                  <div>
                    <h3>Online Courses</h3>
                    <p>
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </FadeInWhenVisible>

          {/* -------------------------Figures----------------------------- */}
          <div className={styles.Figures}>
            <FadeInWhenVisible>
              {/* <FontAwesomeIcon icon={faCircleCheck} /> */}
              <div className={styles.figuresData}>
                <Image src={itemsDelivered} alt="" />
                <div>
                  <h1>
                    <CountUp end={723} useEasing duration={7} enableScrollSpy />
                  </h1>
                  <p>
                    DELIVERED <br /> ORDERS
                  </p>
                </div>
              </div>
            </FadeInWhenVisible>
            <FadeInWhenVisible>
              <div className={styles.figuresData}>
                <Image src={teamLogo} alt="" />
                <div>
                  <h1>
                    <CountUp
                      end={1308}
                      useEasing
                      duration={7}
                      enableScrollSpy
                    />
                  </h1>
                  <p>EXPERTS</p>
                </div>
              </div>
            </FadeInWhenVisible>
            <FadeInWhenVisible>
              <div className={styles.figuresData}>
                <Image src={customerLogo} alt="" />
                <div>
                  <h1>
                    <CountUp
                      end={50221}
                      useEasing
                      duration={7}
                      enableScrollSpy
                    />
                  </h1>
                  <p>CUSTOMERS</p>
                </div>
              </div>
            </FadeInWhenVisible>
            <FadeInWhenVisible>
              <div className={styles.figuresData}>
                <Image src={ratingLogo} alt="" />
                <div>
                  <h1>
                    <CountUp end={9} useEasing duration={7} enableScrollSpy />
                    /10
                  </h1>
                  <p>
                    CUSTOMER <br /> RATING
                  </p>
                </div>
              </div>
            </FadeInWhenVisible>
          </div>

          {/* -----------------------------Courses------------------------------------ */}
          <div className={styles.Courses}>
            <span>Courses</span>
            <h2>Courses that we provide</h2>
            <section className={styles.courseItemContainer}>
              <FadeInWhenVisible>
                {" "}
                <Link
                  href={{
                    pathname: "https://swipeupassignments.com/assignment-help/",
                  }}
                  target="_blank"
                  className="Link"
                >
                  <div className={styles.courseItem}>
                    <Image
                      width={1920}
                      height={1920}
                      src={assignment_help}
                      alt="course"
                    />
                    <h4>Assignment Help</h4>
                  </div>
                </Link>
              </FadeInWhenVisible>
              <FadeInWhenVisible>
                {" "}
                <Link
                  href={{
                    pathname:
                      "https://swipeupassignments.com/dissertation-help",
                  }}
                  target="_blank"
                  className="Link"
                >
                  <div className={styles.courseItem}>
                    <Image
                      width={1920}
                      height={1920}
                      src={dissertation_help}
                      alt="course"
                    />
                    <h4>Dissertation Help</h4>
                  </div>
                </Link>
              </FadeInWhenVisible>
              <FadeInWhenVisible>
                {" "}
                <Link
                  href={{
                    pathname: "https://swipeupassignments.com/essay-help",
                  }}
                  target="_blank"
                  className="Link"
                >
                  <div className={styles.courseItem}>
                    <Image
                      width={1920}
                      height={1920}
                      src={essay_help}
                      alt="course"
                    />
                    <h4>Essay Help</h4>
                  </div>
                </Link>
              </FadeInWhenVisible>
              <FadeInWhenVisible>
                {" "}
                <Link
                  href={{
                    pathname: "https://swipeupassignments.com/exam-help",
                  }}
                  target="_blank"
                  className="Link"
                >
                  <div className={styles.courseItem}>
                    <Image
                      width={1920}
                      height={1920}
                      src={exam_help}
                      alt="course"
                    />
                    <h4>Exam Help</h4>
                  </div>
                </Link>
              </FadeInWhenVisible>
              <FadeInWhenVisible>
                {" "}
                <Link
                  href={{
                    pathname: "https://swipeupassignments.com/programming-help",
                  }}
                  target="_blank"
                  className="Link"
                >
                  <div className={styles.courseItem}>
                    <Image
                      width={1920}
                      height={1920}
                      src={programming_help}
                      alt="course"
                    />
                    <h4>Programming Help</h4>
                  </div>
                </Link>
              </FadeInWhenVisible>
              <FadeInWhenVisible>
                {" "}
                <Link
                  href={{
                    pathname:
                      "https://swipeupassignments.com/thesis-paper-help",
                  }}
                  target="_blank"
                  className="Link"
                >
                  <div className={styles.courseItem}>
                    <Image
                      width={1920}
                      height={1920}
                      src={thesis_help}
                      alt="course"
                    />
                    <h4>Thesis Help</h4>
                  </div>
                </Link>
              </FadeInWhenVisible>
            </section>
          </div>

          {/* ----------------------Our Support----------------------------------------- */}
          <div className={styles.OurSupport}>
            <span className={styles.spanOurSupport}>Our Support</span>
            <h2>Step by Step Guide </h2>
            <article className={styles.supportArticle}>
              <section>
                <div className={styles.supportList}>
                  {" "}
                  <span> Upload Asssignment </span>
                </div>
                <div className={styles.supportList}>
                  <span> Pay for Assignment </span>
                </div>
                <div className={styles.supportList}>
                  <span> Track Progress</span>
                </div>
                <div className={styles.supportList}>
                  <span> Delivery </span>
                </div>
                <div className={styles.supportList}>
                  <span> Feedback </span>
                </div>
              </section>
            </article>
          </div>

          {/* ------------------------OurFeatures--------------------------- */}
          <div className={styles.OurFeatures}>
            <span className={styles.spanOurFeatures}>Features</span>
            <h2>Features that we give</h2>
            <section className={styles.FeaturesContainer}>
              <div className={styles.FeatureList}>
                <Image src={feature1} alt="" />
                <div>
                  <h3>Plagarism Free</h3>
                  <p>
                    A 100% original solution to reduce the risk of negative
                    marking.
                  </p>
                </div>
              </div>
              <div className={styles.FeatureList}>
                <Image src={feature2} alt="" />
                <div>
                  <h3>24*7 Help</h3>
                  <p>
                    Around the clock - If you have any problems with your
                    assignments, We are always here to help.
                  </p>
                </div>
              </div>
              <div className={styles.FeatureList}>
                <Image src={feature3} alt="" />
                <div>
                  <h3>On Time Delivery</h3>
                  <p>
                    Submit before the deadline, no matter how tough the task is.
                  </p>
                </div>
              </div>
              <div className={styles.FeatureList}>
                <Image src={feature4} alt="" />
                <div>
                  <h3>P.Hd. Expert Writers</h3>
                  <p>
                    Get Rewrites of your task an unlimited number of times until
                    you are satisfied.
                  </p>
                </div>
              </div>
              <div className={styles.FeatureList}>
                <Image src={feature5} alt="" />
                <div>
                  <h3>Confidential</h3>
                  <p>
                    We guarantee the safety of your information from malicious
                    third parties.
                  </p>
                </div>
              </div>
              <div className={styles.FeatureList}>
                <Image src={feature6} alt="" />
                <div>
                  <h3>Best Price</h3>
                  <p>
                    Get 100% accurate solutions on 250+ topics and improve your
                    grade point average.
                  </p>
                </div>
              </div>
            </section>
          </div>

          {/* -----------------------Testmonials------------------------------------ */}
          <div className={styles.Testimonials}>
            <span className={styles.spanTestimonials}>Testimonials</span>
            <h2>What our clients say?</h2>
            <div className="testimonials_container">
              <Carousel
                responsive={responsive}
                showDots={true}
                infinite={true}
                transitionDuration={500}
                removeArrowOnDeviceType={["tablet", "mobile"]}
                autoPlay={true}
                autoPlaySpeed={3000}
              >
                {testimonialsData.map((testimonial) => (
                  <div
                    key={testimonial.id}
                    className={styles.testimonials_list}
                  >
                    <div>
                      {/* <img src={reactlogo} alt="person" /> */}
                      <span>
                        <h3> {testimonial.reviewerName}</h3>
                        <p>{testimonial.courseName}</p>
                      </span>
                    </div>
                    <p className={styles.reviewDescription}>
                      {testimonial.reviewDescription}
                    </p>
                  </div>
                ))}
              </Carousel>
            </div>
          </div>

          {/* -------------------------Blogs Component------------------------------- */}
          <Blogs />
        </section>
      </div>
    </div>
  );
}
