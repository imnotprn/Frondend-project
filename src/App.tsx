import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import PostDetail from "./pages/PostDetail";
import Create from "./pages/Create";
import Login from "./pages/Login";
import GuardedRoute from "./guard/GuardedRoute";
import { useAuth } from "./providers/AuthProvider";

function App() {
  const { isLoggedIn } = useAuth();
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/content/:id" element={<PostDetail />} />
        <Route
          element={
            <GuardedRoute
              isRouteAccessible={isLoggedIn}
              redirectRoute="/login"
            />
          }
        >
          <Route path="/create" element={<Create />} />
        </Route>
        <Route
          element={
            <GuardedRoute isRouteAccessible={!isLoggedIn} redirectRoute="/" />
          }
        >
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
