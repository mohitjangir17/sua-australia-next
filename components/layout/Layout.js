import Footer from "./Footer";
import Navbar from "./Navbar";
import styles from '../../styles/Home.module.css'

function Layout(props) {
    return (
        <>
            <main>{props.children}</main>
            <Footer />
        </>
    )
}
export default Layout;