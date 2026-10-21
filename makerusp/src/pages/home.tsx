import About from '../components/section/About';
import Contact from '../components/section/Contact';
import Footer from '../components/section/Footer';
import Header from '../components/section/Header';
import Hero from '../components/section/Hero';
import HowItWorks from '../components/section/HowItWorks';
import Infrastructure from '../components/section/Infrastructure';
import Pillars from '../components/section/Pillars';
import PrototypeShowcase from '../components/section/PrototypeShowcase';

/** Página principal da landing page MakerUSP. */
export default function Home() {
  return (
    <>
      <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
      <Header />
      <main id="conteudo">
        <Hero />
        <Pillars />
        <About />
        <Infrastructure />
        <HowItWorks />
        <PrototypeShowcase />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
