import Footer from "../components/Footer";
import Header from "../components/Header";

function Layout({ children, setIsCart }) {
  return (
    <div>
      <Header setIsCart={setIsCart} />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
