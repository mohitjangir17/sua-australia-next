import Footer from "./Footer";
import Navbar from "./Navbar";
import styles from "../../styles/Home.module.css";
import ChatBot from "../ChatBot";
import GoogleAnalytics from "../GoogleAnalytics";

function Layout(props) {
  return (
    <>
      {/* <GoogleAnalytics /> */}
      <main>{props.children}</main>
      <Footer />
      <ChatBot />
    </>
  );
}
export default Layout;
