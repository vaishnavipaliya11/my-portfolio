import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Header } from "./componants/header/Header";
import { Home } from "../src/pages/home/Home";
import { Blogs } from "../src/pages/blogs/Blogs";
import { Projects } from "../src/pages/projects/Projects";

function App() {
  return (
    <div className="App">
      <Header />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blogs />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
