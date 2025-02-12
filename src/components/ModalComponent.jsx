import { Image } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function ModalComponent(props) {
  return (
    <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Header closeButton onClick={props.handleCloseDetails}>
        <Modal.Title id="contained-modal-title-vcenter">{props.film.Title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Image src={props.film.Poster} className="float-start me-3" />
        <p>
          <b>Anno di Produzione: </b>
          {props.film.Year}
        </p>
        <p>
          <b>Tipo di prodotto: </b>
          {props.film.Type}
        </p>
        <a href={`https://www.imdb.com/it/title/${props.film.imdbID}`} target="_blank">
          Guarda su IMDb
        </a>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" onClick={props.handleCloseDetails}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModalComponent;
