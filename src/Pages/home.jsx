import { useHeaderGetSize, useHeaderUpdate } from "../Components/Hooks/HeaderSize";

function Home() {
  const headerHeight = useHeaderGetSize();
  useHeaderUpdate(headerHeight);

  return (
    <div>
      <div className="hero">
        <div className="background accueil"></div>
        <section>
          <h2>A propos de moi:</h2>
          <p>
            Bonjour et bienvenue sur mon site ! Je m'appelle Frédéric et je suis
            un développeur web passionné par le monde de l'informatique et du
            numérique.
          </p>
          <p>
            Mon parcours professionnel a commencé il y a plus de 20 ans dans le
            domaine de la maintenance informatique. J'ai toujours eu à cœur
            d'être au service des clients, de les aider à résoudre leurs
            problèmes techniques et de contribuer à améliorer leur expérience
            avec la technologie.
          </p>
          <p>
            Au fil du temps, ma curiosité et ma soif d'apprentissage m'ont amené
            dans le monde de l'électrotechnique. Cela m'a permis de renforcer
            mes compétences techniques tout en continuant à travailler
            directement avec les clients pour répondre à leurs besoins
            spécifiques.
          </p>
          <p>
            Aujourd'hui, je reviens à mes premières amours dans le domaine de
            l'informatique. En effet, j'ai décidé de me lancer dans le
            développement web pour aider mes clients à créer des sites web qui
            répondent à leurs attentes. Je suis fier d'avoir suivi avec succès
            la formation de développeur web d'OpenClassrooms, qui m'a permis
            d'acquérir des compétences solides et actuelles dans ce domaine.
          </p>
          <p>
            Je suis enthousiaste à l'idée de mettre à profit mes compétences et
            mon expérience pour vous aider à concrétiser votre projet web.
            N'hésitez pas à me contacter pour discuter de vos besoins et pour
            voir comment je peux vous aider à les réaliser.
          </p>
        </section>
      </div>
      <section className="skill">
        <h2>Mes compétences:</h2>
        <div>
          <div className="front"></div>
          <div>
            <ul>
              <li>HTML5 et CSS3</li>
              <li>JavaScript</li>
              <li>React.js</li>
              <li>Débogage</li>
              <li>SEO et accessibilité</li>
              <li>Git/GitHub</li>
            </ul>
          </div>
        </div>
        <div>
          <div className="back"></div>
          <div>
            <ul>
              <li>Node.js</li>
              <li>Express</li>
              <li>PHP</li>
              <li>MySQL/MariaDB</li>
              <li>MongoDB</li>
              <li>API REST</li>
              <li>Débogage</li>
            </ul>
          </div>
        </div>
        <div>
          <div className="tool"></div>
          <div>
          <ul>
              <li>HAProxy</li>
              <li>Apache</li>
              <li>VS Code</li>
              <li>Sublime Text</li>
              <li>Réplication Asynchrone FS</li>
              <li>Réplication Synchrone MariaDB</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
