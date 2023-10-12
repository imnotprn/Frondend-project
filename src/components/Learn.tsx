import { ContentDTO } from "../types/dto";
import classes from "./Learn.module.css";

interface IContentsProps {
  content: ContentDTO;
}

const Learn = ({ content }: IContentsProps) => {
  return (
    <div className={classes.containercard}>
      <img src={content.thumbnailUrl} alt="Learn cover" />
      <div className={classes.containercontent}>
        <div>
          <h2>{content.videoTitle}</h2>
          <h4>{content.creatorName}</h4>
        </div>
        <div>
          <p>{content.comment}</p>
        </div>
        <div className={classes.containtertittle}>
          <div>
            <h5>{content.postedBy.name}</h5>
            <p className={classes.tittleauthor}>Author</p>
          </div>
          <div>
            <div className={classes.containerrating}>
              {[...new Array(content.rating)].map((_, idx) => {
                return (
                  <img key={idx} src="src/assets/Star.svg" alt="Rating Star" />
                );
              })}
            </div>
            <p className={classes.tittlerating}>Rating</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Learn;
