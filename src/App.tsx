import { useState, useEffect } from "react";
import "./App.css";
import { MoviesDetails } from "./Interface";

// Import Components

import { UpperBar } from "./Components/UpperBar";
import { LeftBar } from "./Components/LeftBar";
import { RightBar } from "./Components/RightBar";
import { Player } from "./Components/Player";

function App() {
  const [activeMovie, setactiveMovie] = useState(0);

  useEffect(() => {
    MoviesFilter(activeMovie);
  }, [activeMovie]);

  const MoviesFilter = (id: number) => {
    const FM = MoviesDetails.find((e) => e.MovieID === id);
    console.log(FM);
  };
  return (
    <>
      <UpperBar />
      <div className="w-[90vw] grid grid-cols-8 mt-3 gap-2">
        <LeftBar setactiveMovie={setactiveMovie} />
        <Player />
        <RightBar />
      </div>
    </>
  );
}

export default App;
