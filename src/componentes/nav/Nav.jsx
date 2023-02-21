import "./nsv.scss";
import imagen from "../../assets/pablo-miaja-removebg-preview.png"
import { FaGofore } from "react-icons/fa";

const Nav = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={"nav "  + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
        <img src={imagen} alt="" className="logo"/>
          <div className="itemContainer">
            <span>Colegio Pablo Miaja</span>
          </div>
          <div className="itemContainer">
            <FaGofore className="icon" />
            <span>https://trabajo-practico-nine.vercel.app/</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburguer" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
