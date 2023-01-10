import Footer from "./Footer";
import ChatBot from "../ChatBot";
import GoogleAnalytics from "../GoogleAnalytics";

function Layout(props) {
  return (
    <>
      <GoogleAnalytics />
      <main>{props.children}</main>
      <Footer />
      <ChatBot />
    </>
  );
}
export default Layout;
