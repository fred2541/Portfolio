import { useHeaderGetSize, useHeaderUpdate } from "../Components/Hooks/HeaderSize";
import Works from "../Components/Works/works";

function Portfolio() {
  const headerHeight = useHeaderGetSize();
  useHeaderUpdate(headerHeight);
  
    return (
        <div>
        <div className="hero">
          <div className="background portfolio"></div>
          <section>
            <h2>Mes réalisations:</h2>
            <p>
            C'est un plaisir de vous retrouver sur cette page dédiée à mes réalisations. Vous y trouverez une sélection de mes derniers projets, qui témoignent de ma passion pour le développement web et de mon engagement à créer des solutions numériques innovantes.
            </p>
            <p>
            Veuillez noter que, par respect pour la confidentialité de certains de mes clients et pour des raisons de non-divulgation, quelques projets ne sont pas affichés ici ou présentent des informations masquées. Cependant, chaque projet visible sur cette page est un exemple de ma capacité à résoudre des problèmes, à adopter de nouvelles technologies et à transformer des idées en réalités tangibles et performantes.
            </p>
            <p>
            J'espère que vous apprécierez la découverte de mes travaux. Si vous souhaitez en savoir plus sur un projet spécifique ou discuter d'une éventuelle collaboration, n'hésitez pas à me contacter.
            </p>
          </section>
        </div>
        <section>
        <Works />
        </section>
      </div>
    )
}


export default Portfolio;