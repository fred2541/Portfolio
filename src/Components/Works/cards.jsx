import Modal from "react-modal";
import { useState } from "react";

Modal.setAppElement("#root"); // Set root element to Modal for accesibility

const Cards = ({ dataWork , index}) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    document.querySelector("header").style.display = "none";
    setModalIsOpen(true);
  };

  const closeModal = () => {
    document.querySelector("header").style.display = "initial";
    setModalIsOpen(false);
  };
  return (
    <div>
      <article onClick={openModal}>
        <img src={dataWork.cover} alt=""></img>
        <figcaption>
          <p>{dataWork.title}</p>
          <p>{dataWork.type}</p>
          <div>
            {dataWork.tags.map((tags) => (
              <p key={tags}>{tags}</p>
            ))}
          </div>
        </figcaption>
        <div className="svgCorner svgCornerTL"></div>
        <div className="svgCorner svgCornerTR"></div>
        <div className="svgCorner svgCornerBL"></div>
        <div className="svgCorner svgCornerBR"></div>
      </article>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Exemple Modale"
      >
        <h2>{dataWork.title}Ceci est une modale</h2>
        <p>Bienvenue dans la modale!</p>
        <button onClick={closeModal}>Fermer la modale</button>
      </Modal>
    </div>
  );
};
export default Cards;
