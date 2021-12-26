import Hero from "./components/Hero";
import About from "./components/About";
import Sponsor from "./components/Sponsor";
import Agenda from "./components/Agenda";
import Whitepaper from "./components/Whitepaper";
import Coming from "./components/Coming";
import "./style/style.scss";
import aboutimg from "./assets/aboutimg.png";

function App() {
  return (
    <>
      <Hero />

      <About aboutimg={aboutimg}/>

      <Sponsor />

      <Agenda />

      <Whitepaper/>

      <Coming />

      <footer>
        <div className="content">
          <p>Design and code by <a href="https://www.walimechaib.pro/">@therealwalim</a></p>
        </div>
      </footer>
    </>
  );
}

export default App;
