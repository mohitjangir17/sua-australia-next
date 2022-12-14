import Head from "next/head";
import HeaderOtherPages from "../components/HeaderOtherPages";
import HeadImage from "../public/resources/contact-us.jpg";
import homestyles from "../styles/Home.module.css";
import uploadstyles from "../styles/AssignmentQuery.module.css";
import styles from "../styles/Contact.module.css";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact Us | SUA-Australia</title>
        <meta name="Assignment Query" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeaderOtherPages headerImage={HeadImage} title="Contact Us" />
      <main className={homestyles.mainContainer}>
        <div className={styles.contactContainer}>
          <section className={styles.contactLinks}>
            <h3 className={styles.lgit}>Let's get in touch!</h3>
            <p>
              Whether you wish to seek help or to offer a suggestion, we are
              open to everything. So feel free to get in touch with us.
            </p>
            <div>
              <p>
                <strong> Address:</strong> Jaipur, Rajasthan
              </p>
              <p>
                <strong> Phone:</strong>{" "}
                <a href="tel:+91 93515 83366">+91 93515 83366</a>
              </p>
              <p>
                <strong> Email: </strong>{" "}
                <a href="mailto: support@swipeupassignments.com">
                  support@swipeupassignments.com
                </a>
              </p>
              <p>
                <strong> Website: </strong>{" "}
                <a href="https://swipeupassignments.com">
                  swipeupassignments.com
                </a>{" "}
              </p>
            </div>
          </section>
          <section className={styles.contactUsForm}>
            <form action="#" method="post">
              <div
              //  className={uploadstyles.splitFields}
              >
                {" "}
                <div>
                  <label htmlFor="fistname">Firstname</label> <br />
                  <input
                    type="text"
                    name="firstname"
                    // value={firstName}
                    placeholder="Your Firstname"
                    // onChange={(e) => setFirstName(e.target.value)}
                  />{" "}
                  <br />
                </div>
                <div>
                  <label htmlFor="lastname">Lastname</label> <br />
                  <input
                    type="text"
                    name="lastname"
                    // value={lastName}
                    placeholder="Your Lastname"
                    // onChange={(e) => setLastName(e.target.value)}
                  />{" "}
                  <br />
                </div>
                <div>
                  <label htmlFor="email">Email address</label> <br />
                  <input
                    type="text"
                    name="email"
                    // value={email}
                    placeholder="Your Email"
                    // onChange={(e) => setEmail(e.target.value)}
                  />{" "}
                  <br />
                </div>
                <div>
                  <label htmlFor="contact">Contact</label> <br />
                  <input
                    type="tel"
                    name="contact"
                    // value={contact}
                    placeholder="Your Contact Number"
                    // onChange={(e) => setContact(e.target.value)}
                  />{" "}
                  <br />
                </div>
              </div>
              <button>Send Mail</button>
            </form>
          </section>
        </div>
      </main>
    </>
  );
}
