import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedTreats from './components/FeaturedTreats';
import CustomOrders from './components/CustomOrders';
import Occasions from './components/Occasions';
import Reviews from './components/Reviews';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <FeaturedTreats />
        <CustomOrders />
        <Occasions />
        <Reviews />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
