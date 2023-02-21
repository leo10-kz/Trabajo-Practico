import "./menu.scss"




const Menu = ({menuOpen, setMenuOpen}) => {
    return (
        <div className={"menu " + ( menuOpen && "active" )}>
           <ul>
               <li onClick={() => setMenuOpen(false)}>
                   <a href="#historia">Historia</a>
               </li>
               <li onClick={() => setMenuOpen(false)}>
                   <a href="#intro">Organizacion y Competencias</a>
               </li>
               <li onClick={() => setMenuOpen(false)}>
                   <a href="#integrantes">Integrantes</a>
               </li>
               {/* <li onClick={() => setMenuOpen(false)}>
                   <a href="#project">Projects</a>
               </li>
               <li onClick={() => setMenuOpen(false)}>
                   <a href="#contact">Contact</a>
               </li> */}
           </ul>
        </div>
      )
};


export default Menu;