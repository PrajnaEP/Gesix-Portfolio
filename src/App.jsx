import Header from "./components/header";
import Hero from "./components/hero";
import TechStack from "./components/techStack";
import Projects from "./components/projects";
import Footer from "./components/footer";

function App() {
  return (
    <>
        <Header />

        <main id="main-content">
          <Hero />
          <TechStack />
          <Projects />
        </main>

        <Footer />
      </>
  );
}

export default App;
