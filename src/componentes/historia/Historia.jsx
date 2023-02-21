import "./historia.scss"
import tribunal from "../../assets/tribunal.jpg";
import tribunal1 from "../../assets/tribunal1.jpg";
import tribunal2 from "../../assets/tribunal2.jpg";
import tribunal4 from "../../assets/tribunal4.jpg"


const Historia = () => {
    return (
        <div className='about' id='historia'>
           <div className="left">
               <div className="container">
                   <h2>TRIBUNAL SUPERIOR DE JUSTICIA DE ASTURIAS</h2>
                   <p>
                   El Tribunal Superior de Justicia del Principado de Asturias se constituyó el 23 de mayo de 1989 en aplicación de la Ley 38/1988, de 28 de diciembre. Sustituye a la antigua Audiencia Territorial de Oviedo en orden al modelo judicial autonómico que se ha querido implantar. El Tribunal Superior de Justicia de Asturias es el máximo órgano judicial en el territorio de la Comunidad Autónoma, sin perjuicio del ámbito jurisdiccional que corresponde al Tribunal Supremo y de las materias que exijan garantías correspondientes al Tribunal Constitucional. Está dividido actualmente en tres Salas: Sala de lo Civil y Penal, Sala de lo Social y Sala de lo Contencioso-Administrativo. El Tribunal se compone de un presidente, que lo es también de la Sala de lo Civil y Penal, y de los presidentes de Sala y de los magistrados que determina la ley para cada una de las Salas y, en su caso, de las Secciones que puedan crearse dentro de ellas. Consta, además, de una Secretaría de Gobierno que ejerce funciones de gobierno, administración e inspección. Depende también del Tribunal Superior de Justicia de Asturias la Fiscalía Superior de la Comunidad Autónoma del Principado de Asturias. 
                   </p>
                   <h3>Imagenes</h3>
            <div className="imgContainer">
               <img src={tribunal1} alt="" />
               <img src={tribunal2} alt="" />
               <img src={tribunal} alt="" />
           </div>
               </div>
           </div>
           <div className="right">
               <div className='item'>
               <img src={tribunal4} alt="" />
               </div>
           </div>
        </div>
      )
};


export default Historia;