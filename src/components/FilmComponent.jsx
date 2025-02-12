import { Component } from "react";
import { Row, Col, Image, Spinner, Alert } from "react-bootstrap";
import ModalComponent from "./ModalComponent";

class FilmComponent extends Component {
  state = {
    films: [],
    isLoading: false,
    hasError: false,
    errorMessage: "",
    showDetails: false,
    selectedFilm: null,
  };

  fetchFilms = async (filmSearch) => {
    try {
      this.setState({ isLoading: true });

      const response = await fetch(`http://www.omdbapi.com/?s=${filmSearch}&apikey=54eecc21`);

      if (response.ok) {
        const films = await response.json();
        this.setState({
          films: (films.Search || []).slice(0, 6).map((film) => film),
        });
      } else if (response.status === 401) {
        throw new Error("401 - non autorizzato");
      } else if (response.status === 404) {
        throw new Error("404 - risorsa inesistente");
      } else if (response.status === 500) {
        throw new Error("500 - Errore interno del server");
      } else if (response.status === 403) {
        throw new Error("403 - Accesso negato");
      } else if (response.status === 429) {
        throw new Error("429 - Troppe richieste, attendi qualche secondo");
      } else if (response.status === 503) {
        throw new Error("503 - Servizio non disponibile, riprova più tardi");
      } else {
        throw new Error("Errore nel reperimento dei dati: " + response.status);
      }
    } catch (error) {
      console.error("Errore nel reperimento dei dati: ", error);
      this.setState({ hasError: true, errorMessage: error.message });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  componentDidMount() {
    this.fetchFilms(this.props.filmSearch);
  }

  handleShowDetails = (film) => {
    this.setState({ showDetails: true, selectedFilm: film });
    console.log(film);
  };

  handleCloseDetails = () => {
    this.setState({ showDetails: false, selectedFilm: null });
  };

  render() {
    return (
      <>
        <h4>{this.props.filmSearch}</h4>
        {this.state.isLoading && (
          <Spinner animation="border" role="status" variant="danger" className="d-block mx-auto p-5">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        )}
        {this.state.hasError && (
          <Alert variant="danger">{this.state.errorMessage ? this.state.errorMessage : "Errore generico"}</Alert>
        )}
        {(this.state.films.length === 0) & (this.state.isLoading !== true) && (
          <Alert variant="danger" className="mb-5">
            Nessun Film con ricerca {'"' + this.props.filmSearch + '"'} trovato
          </Alert>
        )}
        <Row className="mb-4" xs={1} sm={2} lg={4} xl={6}>
          {this.state.films.map((film, index) => (
            <Col key={index} className="mb-2 text-center px-1">
              <Image
                src={film.Poster}
                alt={film.Title}
                className="filmimg"
                onClick={() => this.handleShowDetails(film)}
                style={{ cursor: "pointer" }}
              />
            </Col>
          ))}
        </Row>

        {/* Al click sull'immagine faccio partire un modale che contiene le informazioni aggiuntive comprese un redirect su imdb */}

        {this.state.showDetails === true && (
          <ModalComponent
            show={this.state.showDetails}
            handleCloseDetails={this.handleCloseDetails}
            film={this.state.selectedFilm}
          />
        )}
      </>
    );
  }
}

export default FilmComponent;
