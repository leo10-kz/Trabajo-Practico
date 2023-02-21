
import team from "../../assets/team2.png"
import "./integrantes.scss"


const Integrantes = () => {


    return (
        <div className="contact" id="integrantes">
          <div className="left">
          <div className="imgContainer">
            <img src={team} alt="" />
          </div>
          </div>
          <div className="right">
          <div className="wrapper">
             <h1>Integrantes:</h1> 
             <h2><span>Lautaro Quiroga</span></h2>
             <h2><span>Mariana da Rocha Tavares</span></h2>
             <h2><span>Alehandro</span></h2>
             <h2><span>Ali Ait Hmad ou Hssaine</span></h2>
          </div>
        </div>
          </div>
      );


};


export default Integrantes