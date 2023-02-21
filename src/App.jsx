import Nav from "./componentes/nav/Nav";
import Menu from "./componentes/menu/Menu";
import Historia from "./componentes/historia/Historia";
import Organizacion from "./componentes/organizacion/Organizacion";
import Integrantes from "./componentes/integrantes/Integrantes";
import { useState } from "react";

function App() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="App">
    <Nav menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
    <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
     <div  className="sections">
    <Historia/>
    <Organizacion/>
    <Integrantes/>
     </div>
    </div>
  );
}

export default App;
