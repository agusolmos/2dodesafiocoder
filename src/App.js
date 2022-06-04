import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Inicio } from "./components/Pages/Inicio";
import { About } from "./components/Pages/quien";
import { Blog } from "./components/Pages/producto";
import { Contact } from "./components/Pages/Contacto";
import ItemListContainer from './components/ItemListContainer';

function App() {
  return (
    <>
      <Router>
        <NavBar />

        <div className="pages">
          <Switch>
            <Route exact path="/" component={Inicio} />
            <Route path="/quien" component={quien} />
            <Route path="/producto" component={producto} />
            <Route path="/Contacto" component={Contacto} />
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
