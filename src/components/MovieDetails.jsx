import { useState, useEffect } from "react";
import { Col, Container, Image, Row, Spinner } from "react-bootstrap";
import { Link, useParams } from "react-router";

const MovieDetails = () => {
  const { movieId } = useParams();

  const [film, setFilm] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const fetchFilm = async () => {
      try {
        setIsLoading(true);
        setHasError(false);

        const response = await fetch(`http://www.omdbapi.com/?i=${movieId}&apikey=54eecc21`);

        if (!response.ok) {
          throw new Error(`Errore nel reperimento dei dati: ${response.status}`);
        }
        const data = await response.json();
        setFilm(data);
      } catch (error) {
        console.error("Errore nel reperimento dei dati: ", error);
        setHasError(true);
        setErrorMessage(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    if (movieId) {
      fetchFilm();
    }
  }, [movieId]);

  return (
    <div>
      {isLoading && (
        <Spinner animation="grow" role="status" variant="danger" className="d-block mx-auto p-5">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )}

      {film && (
        <Container>
          <Row className="justify-content-center mb-4">
            <Col md={6}>
              <h2>{film.Title}</h2>
              <Image src={film.Poster} alt={film.Title} className="float-start me-3" />
              <p className="text-light">
                <b>Anno:</b> {film.Year}
              </p>
              <p className="text-light">
                <b>Genere:</b> {film.Genre}
              </p>
              <p className="text-light">
                <b>Trama:</b> {film.Plot}
              </p>
              <Link to="/tv-shows" className="btn btn-danger">
                Torna a TV Shows
              </Link>
            </Col>
          </Row>
        </Container>
      )}
    </div>
  );
};

export default MovieDetails;
