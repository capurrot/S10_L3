import { useState } from "react";
import { Form, Button, Collapse } from "react-bootstrap";
import { Search } from "react-bootstrap-icons";
import { useLocation } from "react-router";

const SearchForm = ({ searchFilm }) => {
  const [open, setOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const location = useLocation();
  console.log(location);

  const toggleCollapse = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formattedValue = searchValue
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");

    searchFilm(formattedValue);
  };

  const myPlaceholder = () => {
    if (location.pathname === "/tv-shows") {
      return "Find TV Series";
    } else {
      return "Titles, people, genres";
    }
  };

  return (
    <Form className="d-flex align-items-center" role="search" onSubmit={handleSubmit}>
      <Collapse in={open}>
        <div className="me-2">
          <Form.Control
            type="text"
            placeholder={myPlaceholder()}
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </div>
      </Collapse>
      <Button
        style={{ backgroundColor: "#221f1f" }}
        variant="dark"
        onClick={toggleCollapse}
        aria-expanded={open}
        aria-controls="inputCollapse"
        type="button"
      >
        <Search />
      </Button>
    </Form>
  );
};

export default SearchForm;
