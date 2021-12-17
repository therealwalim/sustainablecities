import Hero from "./components/Hero";
import "./style/style.scss";
import logo from "./assets/logo.svg";

function App() {
  return (
    <>
      <nav>
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <ul>
          <li>
            <a href="">À propos</a>
          </li>
          <li>
            <a href="">Sponsors</a>
          </li>
          <li>
            <a href="">Agenda</a>
          </li>
          <li>
            <a href="">Contenu</a>
          </li>
        </ul>
      </nav>
      <Hero />

      <section className="about">
        <h1>01</h1>
        <h2>La conference</h2>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
          et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
          takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
          amet, consetetur sadipscing elitr, sed diam
        </p>
        <div className="btn__video">
          <i></i>
          <p>Watch video</p>
        </div>
      </section>

      <section className="sponsor">
        <h1>01</h1>
        <h2>La conference</h2>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
          et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
          takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
          amet, consetetur sadipscing elitr, sed diam
        </p>
        <div className="sponsor__card">
          {
            //Images
          }
        </div>
      </section>

      <section className="agenda">
        <h1>01</h1>
        <h2>La conference</h2>
        <h3>JEUDI 13 JANVIER 2022</h3>
        <div className="line__active"></div>
        <div className="plan">
          <div className="plan__component">
            <div className="plan__hour"></div>
            <div className="plan__description">
              <div className="description__title"></div>
              <div className="description__descript"></div>
            </div>
          </div>
          <div className="plan__line"></div>
        </div>
      </section>

      <section className="whitepaper">
        <h1>01</h1>
        <h2>La conference</h2>
        <p>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
        </p>
        <div className="whitepaper__card">
          {
            //image
          }
          <h4>Title</h4>
          <div className="btn__download">
            <i></i>
            <p>Télécharger le contenu</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
