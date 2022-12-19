import axios from "axios";
import { useEffect, useState } from "react";
import styles from "./Blogs.module.css";
export default function SidebarList() {
  useEffect(() => {
    axios
      .get("https://api.swipeupassignments.com/blogs")
      .catch((error) => {
        console.log(error);
        // setBlogs(error);
      })
      .then((response) => {
        setBlogs(response.data.data);
        // console.log(response.data.data);
      });
  }, []);
  const [getBlogs, setBlogs] = useState([
    {
      id: 1,
      title: "Blog 1",
      description:
        "A small river named Duden flows by their place and supplies it with the necessary regelialia.",
      date: "30-12-2022",
      //   thumbnail: codingguy,s
    },
  ]);
  return (
    <div className={styles.servicesListContainer}>
      <div className={styles.servicesList}>
        <h4>Our Services</h4>

        <a href="https://swipeupassignments.com/assignment-help/">
          {" "}
          <p>Assignment Help</p>
        </a>
        <a href="https://swipeupassignments.com/essay-help/">
          <p>Essay Help</p>{" "}
        </a>
        <a href="https://swipeupassignments.com/exam-help/">
          <p>Exam Help</p>
        </a>
        <a href="https://swipeupassignments.com/programming-help/">
          <p>Programming Help</p>
        </a>
        <a href="https://swipeupassignments.com/dissertation-help/">
          <p>Dissertation Help</p>
        </a>
        <a href="https://swipeupassignments.com/thesis-paper-help/">
          <p>Thesis Paper Help</p>
        </a>
      </div>
      <div className={styles.servicesList}>
        <h4>Our Blogs</h4>
        {getBlogs.map((blog) => (
          <a key={blog.id} href={`/blogs/${blog.id}`}>
            <p>{blog.title}</p>
          </a>
        ))}
      </div>
    </div>
  );
}
