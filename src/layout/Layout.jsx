import Footer from "../components/Footer";
import Header from "../components/Header";


function Layout({ children }) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
