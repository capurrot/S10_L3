import { useState } from "react";
import { Container } from "react-bootstrap";
import "./App.css";
import FilmComponent from "./components/FilmComponent";
import FooterComponent from "./components/FooterComponent";
import NavComponent from "./components/NavComponent";
import { BrowserRouter, Route, Routes } from "react-router";
import TvShows from "./components/TvShows";
import NotFound from "./components/NotFound";
import MovieDetails from "./components/MovieDetails";

const App = () => {
  const [page, setPage] = useState("home");
  const [searchFilm, setSearchFilm] = useState("");

  return (
    /*     <>
       Attraverso dei corto circuiti imposto quale parte di codice visualizzare in modo che sembri un cambio pagina 
      {page === "home" && <NavComponent type="home" updateState={setPage} searchFilm={setSearchFilm} />}
      {page === "profile" && <NavComponent type="profile" updateState={setPage} />}
      {page === "settings" && <NavComponent type="settings" updateState={setPage} />}

      <Container fluid className={`px-4 ${page === "settings" ? "bg-light" : ""}`}>
        {page === "home" && (
          <>
            <GenreComponent />

 Qui aggiungo una row per una saga che può essere inserita attraverso l'input di ricerca aggiunto sulla nav.
                Nel caso in cui la ricerca non dia risultati esce un alert che informa l'utente della cosa.

            {searchFilm !== "" && <FilmComponent key={searchFilm} filmSearch={searchFilm} />}

            <FilmComponent filmSearch="Batman" />
            <FilmComponent filmSearch="Superman" />
            <FilmComponent filmSearch="Star Trek" />
          </>
        )}

        {page === "profile" && <ProfileComponent updateState={setPage} />}
        {page === "settings" && <SettingsComponent updateState={setPage} />}
      </Container> 
      <FooterComponent />
    </> */

    <BrowserRouter>
      <NavComponent page={page} type="home" updateState={setPage} searchFilm={setSearchFilm} />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Container fluid className="px-4">
                {searchFilm !== "" && <FilmComponent key={searchFilm} filmSearch={searchFilm} />}
                <FilmComponent filmSearch="Batman" />
                <FilmComponent filmSearch="Superman" />
                <FilmComponent filmSearch="Star Trek" />
              </Container>
            </>
          }
        />
        <Route
          path="/tv-shows"
          element={
            <>
              <Container fluid className="px-4">
                <TvShows title="TVShows" />
              </Container>
            </>
          }
        />
        <Route path="/movie-details/:movieId" element={<MovieDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <FooterComponent />
    </BrowserRouter>
  );
};

export default App;
