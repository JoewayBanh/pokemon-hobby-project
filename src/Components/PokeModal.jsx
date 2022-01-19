import { useState, useEffect } from "react";
import Modal from "react-modal";
import "./PokeModal.css";

const PokeModal = ({ pokemon }) => {
  const [counter, setCounter] = useState(25);
  let [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    if (counter > 0) {
      setTimeout(() => setCounter(counter - 1), 1000);
    } else {
      setModalIsOpen(true);
    }
  }, [counter]);

  return (
    <>
      {pokemon && (
        <div className="poke-modal-container">
          <button
            className="poke-modal-btn"
            onClick={() => setModalIsOpen(true)}
          >
            Click for modal
          </button>

          <p className="poke-modal-p">
            Modal will auto-open in: {counter} secs
          </p>
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={() => setModalIsOpen(false)}
            style={{
              overlay: { backgroundColor: "grey" },
              content: {
                width: "40vw",
                position: "absolute",
                left: "30vw",
                textAlign: "center",
              },
            }}
          >
            <h2>
              {pokemon.name.charAt(0).toUpperCase() + pokemon.name.substring(1)}
            </h2>
            <br />
            <p>Shiny versions of the pokemon:</p>
            <div>
              <img
                style={{ minHeight: "10rem" }}
                src={pokemon.sprites.back_shiny}
                alt="back"
              />
              <img
                style={{ minHeight: "10rem" }}
                src={pokemon.sprites.front_shiny}
                alt="front"
              />
            </div>
            <button
              className="poke-modal-btn"
              onClick={() => setModalIsOpen(false)}
            >
              Close modal
            </button>
          </Modal>
        </div>
      )}
    </>
  );
};
export default PokeModal;
