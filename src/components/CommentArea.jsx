import { useState, useEffect } from "react";
import CommentList from "./CommentList";
import AddComment from "./AddComment";

const CommentArea = ({ movieId }) => {
  const [reviews, setReviews] = useState([]);

  const fetchComments = async () => {
    try {
      const resp = await fetch(`https://striveschool-api.herokuapp.com/api/comments/${movieId}`, {
        method: "GET",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NzkzNGFkNGI3NDcwMTAwMTU4YjJhYmQiLCJpYXQiOjE3Mzk0MzQ1MzcsImV4cCI6MTc0MDY0NDEzN30.tPdwveQdhsp74ZI9tnyc8JFeBhPpUUuzLwE0zaL5sjw",
        },
      });

      if (resp.ok) {
        const reviewsData = await resp.json();
        console.log(reviewsData);
        setReviews(reviewsData);
      }
    } catch (error) {
      console.error("Error fetching comments:", error);
    }
  };

  useEffect(() => {
    console.log("componentDidMount()");
    fetchComments();
  }, [movieId]);

  return (
    <div className="commentArea">
      <h6>CommentArea</h6>
      <CommentList reviews={reviews} />
      <AddComment movieId={movieId} />
    </div>
  );
};

export default CommentArea;
