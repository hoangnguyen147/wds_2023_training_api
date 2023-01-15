import { useState } from "react";
import "./App.css";
import PostList from "./components/PostList";

function App() {
  const [togglePost, setTogglePost] = useState(true);
  return (
    <div className="App">
      {togglePost ? <PostList /> : <p>Another Page</p>}
      <button onClick={() => setTogglePost((prevState) => !prevState)}>
        Toggle Post
      </button>
    </div>
  );
}

export default App;
