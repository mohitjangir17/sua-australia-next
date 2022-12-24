import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import CountUp from "react-countup";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from "../styles/Home.module.css";

// Resources Import
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
import hidemoney from "../public/resources/hide.png";
import qualityImg from "../public/resources/quality-control.png";
import experienedStaff from "../public/resources/team1.png";
import proofread from "../public/resources/reading-book.png";

// Components Import
import Navbar from "../components/layout/Navbar";
import Blogs from "../components/Blogs";
import HeaderText from "../components/HeaderText";
import FadeInWhenVisible from "../components/Fiwv";
import clientReviewsData from "../clientReviewsData/data";

// Testimonials Slider
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
  // Form State
  const [getValue, setValue] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
  });
  useEffect(function () {
    window.localStorage.setItem("firstName", getValue.firstName);
    window.localStorage.setItem("lastName", getValue.lastName);
    window.localStorage.setItem("subject", getValue.subject);
    window.localStorage.setItem("email", getValue.email);
  });
  function handleChange(evt: any) {
    const { value } = evt.target;
    setValue({
      ...getValue,
      [evt.target.name]: value,
    });
  }

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
        {/* ----------------Upload Form------------------------ */}
        <div className={styles.UploadForm}>
          <form action="/assignment-query" method="post">
            <h1 className={styles.goodGrades}>Need Good Grades?</h1>
            <p className={styles.goodGradesP}>GET SOLUTION NOW!</p>
            <label htmlFor="fistname">Firstname</label> <br />
            <input
              type="text"
              name="firstName"
              value={getValue.firstName}
              placeholder="Your Firstname"
              onChange={handleChange}
            />{" "}
            <br />
            <label htmlFor="lastname">Lastname</label> <br />
            <input
              type="text"
              name="lastName"
              value={getValue.lastName}
              placeholder="Your Lastname"
              onChange={handleChange}
            />{" "}
            <br />
            <label htmlFor="email">Email address</label> <br />
            <input
              type="text"
              name="email"
              value={getValue.email}
              placeholder="Your Email"
              onChange={handleChange}
            />{" "}
            <br />
            <label htmlFor="subject">Subject</label> <br />
            <input
              type="text"
              name="subject"
              value={getValue.subject}
              placeholder="Query Subject"
              onChange={handleChange}
            />{" "}
            <br /> <br />
            {/* <Link href="/upload">Get Help</Link> */}
            <button type="submit">Get Help</button>
          </form>
        </div>
        <section className={styles.whiteBackground}>
          {/* -----------------------Benifits----------------------- */}
          <FadeInWhenVisible>
            <div className={styles.Benifits}>
              <div
                className={styles.benifitsImg}
                style={{
                  // backgroundImage: `url('/resources/girlVector.png')`,
                  backgroundImage: `url('/resources/young-student-girl-isolated-gray-wall-smiling-camera-pressing-laptop-chest-wearing-backpack-ready-go-studies-start-new-project-suggest-new-ideas-removebg-preview.png')`,
                }}
              >
                {" "}
              </div>
              <div className={styles.benifitsContent}>
                <span>Expertise in every field</span>
                <h3> Benifits of working with us</h3>
                <div>
                  <Image src={hidemoney} width={200} height={200} alt="Img" />
                  <div>
                    <h3>No Hidden fee</h3>
                    <p>
                      Hidden fees are everywhere, are not they? Not quite. We
                      are recognized as a trusted name when it comes to
                      providing affordable assignment writing services with no
                      hidden fees. Our services will never be heavy on the
                      pockets of students. Therefore, always count on us for
                      effective and cheap assignment help.
                    </p>
                  </div>
                </div>
                <div>
                  <Image
                    src={experienedStaff}
                    width={200}
                    height={200}
                    alt="Img"
                  />
                  <div>
                    <h3>Experienced Staff</h3>
                    <p>
                      Our in-house team of experienced and professional
                      assignment helpers holds PhDs. A certified professional
                      with a strong academic background and deep expertise who
                      are committed to providing Online Assignment Help services
                      with unique, informative, and error-free 100% original
                      documents. So if you need university assignment help, feel
                      free to contact us anytime.
                    </p>
                  </div>
                </div>
                <div>
                  <Image src={qualityImg} width={200} height={200} alt="Img" />
                  <div>
                    <h3>High Quality</h3>
                    <p>
                      We provide top-notch services to help scholars take a sigh
                      of relief and reduce the burden of writing lengthy
                      documents. We offer a high-quality paper that meets all
                      quality standards. We know how important it is to submit
                      plagiarism-free work to your professor and to avoid that
                      we check our completed papers at least three times.
                    </p>
                  </div>
                </div>

                <div>
                  <Image src={proofread} width={200} height={200} alt="Img" />
                  <div>
                    <h3>Proofreading</h3>
                    <p>
                      Our academic proofreaders team understands the importance
                      of 100% error-free writing, which helps make
                      SwipeupAssignments.com the best service. Our experts
                      proofread your content and make any necessary corrections
                      before submitting it. Each work is edited and proofread
                      multiple times to ensure quality and error-free work.
                      “Write My Assignment” service offered by us is also the
                      best.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </FadeInWhenVisible>

          {/* ------------------------OurFeatures---------------- */}
          <FadeInWhenVisible>
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
                      Submit before the deadline, no matter how tough the task
                      is.
                    </p>
                  </div>
                </div>
                <div className={styles.FeatureList}>
                  <Image src={feature4} alt="" />
                  <div>
                    <h3>P.Hd. Expert Writers</h3>
                    <p>
                      Get Rewrites of your task an unlimited number of times
                      until you are satisfied.
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
                      Get 100% accurate solutions on 250+ topics and improve
                      your grade point average.
                    </p>
                  </div>
                </div>
              </section>
            </div>
          </FadeInWhenVisible>

          {/* -------------------Our Support----------------- */}
          <FadeInWhenVisible>
            <div className={styles.OurSupport}>
              <span className={styles.spanOurSupport}>Our Support</span>
              <h2>Step by Step Guide </h2>
              <article className={styles.supportArticle}>
                <section>
                  <div
                    style={{
                      backgroundImage: `url('/resources/feature_1.jpg')`,
                    }}
                    className={styles.supportList}
                  >
                    {" "}
                    <span> Upload Asssignment </span>
                  </div>
                  <div
                    style={{
                      backgroundImage: `url('/resources/feature_2.png')`,
                    }}
                    className={styles.supportList}
                  >
                    <span> Pay for Assignment </span>
                  </div>
                  <div
                    style={{
                      backgroundImage: `url('/resources/feature_3.png')`,
                    }}
                    className={styles.supportList}
                  >
                    <span> Track Progress</span>
                  </div>
                  <div
                    style={{
                      backgroundImage: `url('/resources/feature_4.png')`,
                    }}
                    className={styles.supportList}
                  >
                    <span> Delivery </span>
                  </div>
                  <div
                    style={{
                      backgroundImage: `url('/resources/feature_5.png')`,
                    }}
                    className={styles.supportList}
                  >
                    <span> Feedback </span>
                  </div>
                </section>
              </article>
            </div>
          </FadeInWhenVisible>

          {/* -----------------------Courses------------------------ */}
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

          {/* -------------------------Figures--------------------- */}
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

          {/* -----------------------Testmonials---------------------- */}
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
                {clientReviewsData.map((review) => (
                  <div key={review.id} className={styles.testimonials_list}>
                    <div>
                      {/* <img src={reactlogo} alt="person" /> */}
                      <span>
                        <h3> {review.reviewerName}</h3>
                        <p>{review.courseName}</p>
                      </span>
                    </div>
                    <p className={styles.reviewDescription}>
                      {review.reviewDescription}
                    </p>
                  </div>
                ))}
              </Carousel>
            </div>
          </div>

          {/* ----------------Blogs Component---------------- */}
          <FadeInWhenVisible>
            <div className={styles.Blogs}>
              <span className={styles.spanBlogs}>Blogs</span>
              <h2>Our Latest Blogs</h2>
              <Blogs />
            </div>
          </FadeInWhenVisible>
        </section>
      </div>
    </div>
  );
}
