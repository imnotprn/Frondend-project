import { Link } from "react-router-dom";
import { ContentDTO } from "../types/dto";
import classes from "./Post.module.css";
import ReactStars from "react-stars";

interface IContentProps {
  content: ContentDTO;
}

const Post = ({ content }: IContentProps) => {
  return (
    <div className={classes.post}>
      <Link
        className={classes.container}
        to={`/content/${content.id}`}
        style={{ textDecoration: "none", color: "black" }}
      >
        <img className={classes.thumbnailUrl} src={content.thumbnailUrl} />
        <div className={classes.detail}>
          <div className={classes.section}>
            <div className={classes.title}>
              <p>{content.videoTitle}</p>
              <p>{content.creatorName}</p>
            </div>
            <p>{content.comment}</p>
          </div>
          <div className={classes.rating}>
            <p>{content.postedBy.name}</p>
            <ReactStars
              size={24}
              color2="#FF731D"
              value={content.rating}
              edit={false}
            />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Post;
