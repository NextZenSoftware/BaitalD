import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";


const Layout = ({ children }) => {
  return (
    <div>
      <nav>
        <Navbar></Navbar>
      </nav>
      <main>{children}</main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default Layout;
