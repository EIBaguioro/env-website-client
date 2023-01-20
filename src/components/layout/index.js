import Topnav from "../topnav";
import Footer from "../footer";

function Layout({ children }) {
    return <>
        <Topnav />
        { children }
        <Footer />
    </>
}

export default Layout;