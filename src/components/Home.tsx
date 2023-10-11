import classes from "./Home.module.css";

const Home = () => {
  return (
    <div className={classes.HomeContainer}>
      <h1>Learnhub</h1>
      <p>Hub for Educational Videos</p>
      <div>
        <button className={classes.PrimaryBottom}>CREATE NEW VIDEO</button>
      </div>
    </div>
  );
};

export default Home;
