import { createContext, useEffect, useState } from "react";
import Info from "./components/info";
import Intro from "./components/intro";
import "./global.css";
import ScrollHandler from "./components/scroll";
import Project from "./components/project";
import Nav from "./components/nav";
import Skill from "./components/skill";
import Fin from "./components/fin";
import SNS from "./components/sns";

export const ReadMeContext = createContext({});

function App() {
  const [readMe, setReadMe] = useState(false);
  const [curIndex, setCurIndex] = useState();
  const value = { readMe, setReadMe, curIndex, setCurIndex };

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100); // 0ms 지연
  }, []);
  return (
    <div className="w-screen bg-neutral-90 text-neutral-20">
      <ReadMeContext.Provider value={value}>
        <ScrollHandler />
        <Nav />
        <SNS />
        <Intro />
        <Info />
        <Skill />
        <Project />
        <Fin />
      </ReadMeContext.Provider>
    </div>
  );
}

export default App;
