import { Navbar } from './Navbar.jsx';
import Footer from './Footer.jsx';

const Layout = ({ children }) => {
  return (
    <section className="flex flex-col min-h-screen"> 
      <Navbar />
      <main className="flex-grow">
        {children} 
      </main>
      <Footer />
    </section>
  );
};

export default Layout;