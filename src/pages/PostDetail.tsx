import { useNavigate, useParams } from "react-router-dom";
import classes from "./PostDetail.module.css";
import useContent from "../hooks/usePost";
import ReactPlayer from "react-player";
import ReactStars from "react-stars";
import { NavLink } from "react-router-dom";
import { FormEvent } from "react";

const PostDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { Post, isLoading, deletePost } = useContent(id || "1");
  console.log(Post);

  const handleDelete = async (e: FormEvent) => {
    e.preventDefault();

    try {
      await deletePost();

      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  if (isLoading) return <h1>Loading...</h1>;

  return (
    <div className={classes.container}>
      <div className={classes.content}>
        {Post && (
          <>
            <div className={classes.titleGroup}>
              <h1 className={classes.videoTitle}>{Post.videoTitle}</h1>
              <a className={classes.creatorName} href={Post.creatorUrl}>
                <div>{Post.creatorName}</div>
              </a>
            </div>
            <div className={classes.video}>
              <ReactPlayer
                className={classes.videoUrl}
                url={Post.videoUrl}
                width="100%"
              ></ReactPlayer>
            </div>
            <div className={classes.commentGroup}>
              <p>{Post.comment}</p>
              <div className={classes.postedBy}>
                <ReactStars
                  className={classes.star}
                  value={Post.rating}
                  size={24}
                  color2="#FF731D"
                  edit={false}
                />
                <p>{Post.postedBy.name}</p>
                <p>{Post.createdAt}</p>
                <p>{`(Updated on ${Post.updatedAt})`}</p>
                {localStorage.getItem("username") === Post.postedBy.username ? (
                  <div className={classes.btnGroup}>
                    <NavLink to={`/content/${id}/edit`}>
                      <button className={classes.edit_btn}>Edit</button>
                    </NavLink>
                    <NavLink to={`/`}>
                      <button
                        className={classes.delete_btn}
                        onClick={handleDelete}
                      >
                        Delete
                      </button>
                    </NavLink>
                  </div>
                ) : (
                  <></>
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default PostDetail;
