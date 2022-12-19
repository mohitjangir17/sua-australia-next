import { useState } from "react";
import styles from "../styles/Home.module.css";
import formstyles from "./UploadForm.module.css";

export default function UploaddForm() {
  // Form State
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  return (
    <div className={formstyles.UploadForm}>
      <form action="/assignment-query" method="post">
        <h1 className={formstyles.goodGrades}>Need Good Grades?</h1>
        <p className={formstyles.goodGradesP}>GET SOLUTION NOW!</p>
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
  );
}
