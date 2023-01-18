import Topnav from "../topnav";

function Layout({ children }) {
    return <>
        <Topnav />
        { children }
    </>
}

export default Layout;