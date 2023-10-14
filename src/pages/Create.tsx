import { useNavigate } from "react-router-dom";
import classes from "./Create.module.css";
import useContents from "../hooks/usePosts";
import { useState, FormEvent } from "react";
import ReactStars from "react-stars";

const Create = () => {
  const { isPosting, createPost } = useContents();
  const navigate = useNavigate();
  const [newUrl, setNewUrl] = useState<string>("");
  const [newComment, setNewComment] = useState<string>("");
  const [newRating, setNewRating] = useState<number>(0);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      await createPost(newUrl, newComment, newRating);

      navigate("/");
      console.log(handleSubmit);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form className={classes.container} onSubmit={handleSubmit}>
      <h1 style={{ color: "#FF731D", fontSize: "36px" }}>
        Create new contents
      </h1>
      <div className={classes.videoUrl}>
        <div className={classes.inputGroup}>
          <div>Video URL</div>
          <input
            style={{
              width: "100%",
              height: "40px",
              borderRadius: "10px",
              fontSize: "20px",
              color: "#7f8588",
              borderColor: "#7f8588",
            }}
            value={newUrl}
            onChange={(e) => setNewUrl(e.target.value)}
            required
          />
        </div>
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
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
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
            onChange={(rating) => setNewRating(rating)}
          />
        </div>
        <button
          className={classes.create_btn}
          type="submit"
          disabled={isPosting}
        >
          Create
        </button>
      </div>
    </form>
  );
};

export default Create;
