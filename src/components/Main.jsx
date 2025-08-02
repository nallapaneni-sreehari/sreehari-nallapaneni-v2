import Header from './Header/Header';
import Hero from './UI/Hero';
import Contact from './UI/Contact';
import Portfolio from './UI/Portfolio';
import Services from './UI/Services';
import Footer from './Footer/Footer';

function Main() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default Main;
