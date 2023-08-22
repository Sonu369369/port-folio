import { Helmet } from "react-helmet";
import About from "./components/About";

import Experience from "./components/Experience";
import Home from "./components/Home";
import NavBar from "./components/NavBar";


function App() {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Sonu Portfolio</title>
        <link
          rel="canonical"
          href="https://my-personal-portfolio-d1n9twqkf-ankitkaushik990.vercel.app/"
        />
        <meta name="description" content="Sonu's personal portfolio" />
      </Helmet>
      <NavBar />
      <Home />
      <About />

      <Experience />



    </div>
  );
}

export default App;
