import Footer from "../components/Footer";
import Header from "../components/Header";

type LayoutProps<T> = {
  children: T;
};

function Layout<T>({ children }: LayoutProps<T>) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default Layout;
