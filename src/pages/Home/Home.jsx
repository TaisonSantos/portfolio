import Hero from "../../sections/Hero/Hero.jsx";
import Projects from "../../sections/Projects/Projects.jsx";
import Footer from "../../components/Footer/Footer.jsx";

function Home() {
  return (
    <main className="portfolio-shell">
      <Hero />
      <Projects />
      <Footer />
    </main>
  );
}

export default Home;
