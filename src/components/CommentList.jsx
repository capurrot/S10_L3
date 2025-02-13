import { ListGroup } from "react-bootstrap";
import SingleComment from "./SingleComment";
import { useParams } from "react-router";
import { useEffect, useState } from "react";

const CommentList = () => {
  const params = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const resp = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${params.movieId}`, {
          method: "GET",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzkzNGFkNGI3NDcwMTAwMTU4YjJhYmQiLCJpYXQiOjE3Mzk0MzQ1MzcsImV4cCI6MTc0MDY0NDEzN30.tPdwveQdhsp74ZI9tnyc8JFeBhPpUUuzLwE0zaL5sjw",
          },
        });

        if (resp.ok) {
          console.log(`https://striveschool-api.herokuapp.com/api/comments/${params.movieId}`);
          const reviewsData = await resp.json();
          setReviews(reviewsData);
        } else {
          console.error("Error fetching comments: Response not OK");
        }
      } catch (error) {
        console.error("Error fetching comments:", error);
      }
    };

    fetchComments();
  }, [params.movieId]);

  return (
    <ListGroup>
      {reviews.map((review) => (
        <SingleComment key={review._id} review={review} />
      ))}
    </ListGroup>
  );
};

export default CommentList;
