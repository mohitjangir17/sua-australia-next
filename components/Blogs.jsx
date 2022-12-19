import styles from "./Blogs.module.css";
import codingguy from "../public/resources/coding-g03bcc4bcb_1280.jpg";
import { useState, useEffect } from "react";
import axios from "axios";

function Blogs() {
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
      thumbnail: codingguy,
    },
  ]);
  return (
    <div className={styles.blogsContainer}>
      {getBlogs.map((blog) => (
        <a key={blog.id} href={`/blogs/${blog.id}`}>
          <div className={styles.blogsList}>
            <div
              className={styles.blogThumbnailBG}
              style={{
                backgroundImage: `url(${blog.thumbnail})`,
              }}
            ></div>
            <h3>{blog.title}</h3>
            <p> {blog.summary} </p>

            <div className={styles.blogInfo}>
              <p>{new Date(blog.createdAt).toDateString()}</p>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
}

export default Blogs;
