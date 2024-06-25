import Header from "../Header";
import Footer from "../Footer";

const Layout = ({ children }) => {
  return (
    <div className="min-h-full">
      <Header />
      <main className="flex-1 h-full min-h-full">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
