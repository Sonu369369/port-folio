import { Helmet } from "react-helmet";
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import SocialLinks from "./components/SocialLinks";

function App() {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Ankit's Portfolio</title>
        <link
          rel="canonical"
          href="https://my-personal-portfolio-d1n9twqkf-ankitkaushik990.vercel.app/"
        />
        <meta name="description" content="Ankit's personal portfolio" />
      </Helmet>
      <NavBar />
      <Home />
      <About />
      <Portfolio />
      <Experience />
      <Contact />

      <SocialLinks />
    </div>
  );
}

export default App;
