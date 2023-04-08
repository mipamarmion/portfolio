import { HashRouter, Route, Switch } from "react-router-dom";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Projects from "./components/projects/Projects";
import "./css/tailwind.css";
import "./css/extra.css";

function App() {
  return (
    <HashRouter>
        <Route path="/" exact component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/projects" component={Projects} />
    </HashRouter>
  );
}

export default App;
