import "./App.css";
import Home from "./components/Home";
import Learn from "./components/Learn";
import useContents from "./hooks/useContents";

import Navbar from "./components/Navbar";

function App() {
  const { posts } = useContents();
  return (
    <>
      <Navbar />
      <Home />
      <div className="feed-container">
        {posts &&
          posts.map((learn) => {
            return <Learn key={learn.id} content={learn} />;
          })}
      </div>
    </>
  );
}

export default App;
