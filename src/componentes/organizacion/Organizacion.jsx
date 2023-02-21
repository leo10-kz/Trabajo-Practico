import "./organizacion.scss";

const Organizacion = () => {
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="Container">
          <h2>Organizacion</h2>
          <h4>
            Está integrado por tres Salas de Justicia y la Sala de Gobierno:
          </h4>
          <ul>
            <li>
              - Sala de lo Civil y Penal, presidida por el presidente del
              Tribunal Superior de Justicia de Asturias.
            </li>
            <li>- Sala de lo Contencioso Administrativo.</li>
            <li>- Sala de lo Social.</li>
          </ul>
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Competencias</h2>
          <h4>
            Según el Estatuto de Autonomía del Principado de Asturias sus
            competencias se extienden a:
          </h4>
          <ul>
            <li>
              - Todas las instancias y grados, con excepción de los recursos de
              casación y revisión, en los órdenes civil y penal y social.
            </li>
            <li>
              - Los recursos que se deduzcan contra los actos y disposiciones de
              las Administraciones públicas, en los términos que establezca la
              Ley Orgánica del Poder Judicial, en el orden
              contencioso-administrativo.
            </li>
            <li>
              - Las cuestiones de competencia entre órganos judiciales en
              Asturias.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Organizacion;
