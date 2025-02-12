import GenreComponent from "./GenreComponent";
import SerieComponent from "./SerieComponent";

const TvShows = () => {
  return (
    <>
      <GenreComponent />
      <SerieComponent filmSearch="Friends" />
      <SerieComponent filmSearch="Suits" />
      <SerieComponent filmSearch="Law" />
    </>
  );
};

export default TvShows;
