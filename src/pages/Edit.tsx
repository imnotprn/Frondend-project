import ReactStars from "react-stars";
import classes from "./Edit.module.css";
import { useNavigate, useParams } from "react-router-dom";
import useContent from "../hooks/usePost";
import { useState, FormEvent } from "react";

const Edit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { Post, isLoading, isSubmitting, editPost } = useContent(id || "1");
  const [editComment, setEditComment] = useState<string>("");
  const [editRating, setEditRating] = useState<number>(0);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      await editPost(editComment, editRating);

      navigate(`/content/${id}`);
      console.log(handleSubmit);
    } catch (err) {
      console.error(err);
    }
  };

  if (isLoading) return <h1>Loading...</h1>;

  return (
    <form className={classes.container} onSubmit={handleSubmit}>
      <h1 style={{ color: "#FF731D", fontSize: "36px" }}>Edit contents</h1>
      <div className={classes.videoUrl}>
        <div className={classes.inputGroup}>
          <div>Comment (280 Characters maximum)</div>
          <input
            style={{
              width: "100%",
              height: "40px",
              borderRadius: "10px",
              fontSize: "20px",
              color: "#7f8588",
              borderColor: "#7f8588",
            }}
            type="text"
            defaultValue={Post?.comment}
            onChange={(editComment) => setEditComment(editComment.target.value)}
            required
          />
        </div>
        <div>
          <ReactStars
            count={5}
            size={24}
            color2="#FF731D"
            edit={true}
            half={false}
            value={Post?.rating}
            onChange={(editRating) => setEditRating(editRating)}
          />
        </div>
        <button
          className={classes.edit_btn}
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Edit..." : "Edit"}
        </button>
      </div>
    </form>
  );
};

export default Edit;
