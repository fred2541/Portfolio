import Modal from "react-modal";
import { useState } from "react";

Modal.setAppElement("#root"); // Set root element to Modal for accesibility

const Cards = ({ dataWork, index }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  // Custom Style for modal
  const customStyles = {
    content: {
      borderRadius: "30px",
    },
  };

  const openModal = () => {
    document.body.classList.add("disable-mouse-events");
    document.querySelector("header").style.display = "none";
    setModalIsOpen(true);
  };

  const closeModal = () => {
    document.body.classList.remove("disable-mouse-events");
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
        style={customStyles}
        contentLabel={"Déscription du projet " + dataWork.title}
      >
        <div className="containerClose">
          <span onClick={closeModal} title="Fermer">
            <i className="close"></i>
          </span>
        </div>
        <div className="containerModal">
          <div>
            <p>
              <span>Nom du projet:</span> {dataWork.title}
            </p>
            <p>
              <span>Date de réalisation:</span> {dataWork.date}
            </p>
            <label>
              <span>Demande du client:</span>
              <p>{dataWork.mission}</p>
            </label>
            <label>
              <span>Solution apporté:</span>
              <p>{dataWork.realisation}</p>
            </label>
            <span className="containerTags">
            {dataWork.tags.map((tags, index) => (
              <span className="tags" key={index}>
                {tags}
              </span>
            ))}
            </span>
            <p className="link">
              {dataWork.url !== "" ? (
                <a href={dataWork.url} alt="" target="_blank" rel="noreferrer">
                  {dataWork.url}
                </a>
              ) : null}
            </p>
            <p className="link">
              {dataWork.source !== "" ? (
                <a
                  href={dataWork.source}
                  alt=""
                  target="_blank"
                  rel="noreferrer"
                >
                  {dataWork.source}
                </a>
              ) : null}
            </p>
          </div>
          <div>
            <img
              src={dataWork.pictures[0]}
              alt={"aperçu du projet" + dataWork.title}
            ></img>
          </div>
          <div>
            <img
              src={dataWork.pictures[1]}
              alt={"aperçu du projet" + dataWork.title}
            ></img>
          </div>
          {dataWork.pictures[2] && (
            <div>
              <img
                src={dataWork.pictures[2]}
                alt={"aperçu du projet" + dataWork.title}
              />
            </div>
          )}
        </div>
      </Modal>
    </div>
  );
};
export default Cards;
