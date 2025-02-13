import { Button, ListGroupItem } from "react-bootstrap";
import { StarFill } from "react-bootstrap-icons";

const SingleComment = (props) => {
  const handleDelete = (id) => {
    fetch("https://striveschool-api.herokuapp.com/api/comments/" + id, {
      method: "DELETE",
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2E0ZGUxYmNhMDcwNDAwMTU4YmY5NzkiLCJpYXQiOjE3Mzg4NTgwMTEsImV4cCI6MTc0MDA2NzYxMX0.KY1i3aAaFytdpVHLectYt_unBT7ZsLQJtlf6z-iXCXg",
      },
    });
  };

  const handleRate = (rate) => {
    return [...Array(rate)].map((i) => <StarFill key={i} className="text-warning" />);
  };

  return (
    <ListGroupItem className="d-flex flex-column bg-transparent text-light border-0">
      <span>{props.review.comment}</span>
      <span>{handleRate(props.review.rate)}</span> <span>{props.review.author}</span>
      <Button
        variant="danger"
        onClick={() => {
          handleDelete(props.review._id);
        }}
      >
        🗑️
      </Button>
    </ListGroupItem>
  );
};

export default SingleComment;
