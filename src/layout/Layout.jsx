import Footer from "../components/Footer";
import Header from "../components/Header";

function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
