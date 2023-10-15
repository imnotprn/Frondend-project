import { NavLink } from "react-router-dom";
import Post from "../components/Post";
import useContents from "../hooks/usePosts";
import { useAuth } from "../providers/AuthProvider";
import classes from "./Home.module.css";

const Home = () => {
  const { contents, isLoading } = useContents();
  const { isLoggedIn } = useAuth();

  if (isLoading) return <h1>Loading...</h1>;

  console.log(isLoggedIn);
  return (
    <>
      <div className={classes.container}>
        <nav className={classes.nav_container}>
          <h1 className={classes.head}>LearnHub</h1>
          <p className={classes.head2}>Hub for Educational Videos</p>
        </nav>
      </div>
      <div className={classes.feed_container}>
        <div className={classes.create}>
          {isLoggedIn ? (
            <NavLink to="/create" className={classes.create_btn}>
              Create new content
            </NavLink>
          ) : (
            <></>
          )}
        </div>
        <div className={classes.feed}>
          {contents &&
            contents.data.map((content) => {
              return <Post key={content.id} content={content} />;
            })}
        </div>
      </div>
    </>
  );
};

export default Home;
