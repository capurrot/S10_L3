import { useState, useEffect } from "react";
import { Row, Col, Image, Spinner, Alert } from "react-bootstrap";
import { Link } from "react-router";

const SerieComponent = ({ filmSearch }) => {
  const [films, setFilms] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const fetchFilms = async (filmSearch) => {
    try {
      setIsLoading(true);
      setHasError(false);

      const response = await fetch(`http://www.omdbapi.com/?s=${filmSearch}&apikey=54eecc21`);

      if (response.ok) {
        const data = await response.json();
        setFilms((data.Search || []).slice(0, 6));
      } else {
        throw new Error(`Errore nel reperimento dei dati: ${response.status}`);
      }
    } catch (error) {
      console.error("Errore nel reperimento dei dati: ", error);
      setHasError(true);
      setErrorMessage(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchFilms(filmSearch);
  }, [filmSearch]);

  return (
    <>
      <h4>{filmSearch}</h4>
      {isLoading && (
        <Spinner animation="border" role="status" variant="danger" className="d-block mx-auto p-5">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )}
      {hasError && <Alert variant="danger">{errorMessage || "Errore generico"}</Alert>}
      {films.length === 0 && !isLoading && (
        <Alert variant="danger" className="mb-5">
          Nessuna Serie con ricerca {'"' + filmSearch + '"'} trovato
        </Alert>
      )}
      <Row className="mb-4" xs={1} sm={2} lg={4} xl={6}>
        {films.map((film, index) => (
          <Col key={index} className="mb-2 text-center px-1">
            <Link to={"/movie-details/" + film.imdbID}>
              <Image src={film.Poster} alt={film.Title} className="filmimg" style={{ cursor: "pointer" }} />
            </Link>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default SerieComponent;
