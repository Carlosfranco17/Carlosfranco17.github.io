import './work.css';
import conv from '../info/Convocatoria.json';

const Card = () => {
  return (
    <div>
      <div className='column-f title' id='convocatoria'>
        <strong>Convocatorias</strong>
      </div>
      <div className='container'>
        <div className="card">
          <div className="box">
            <div className="content">
              <h2>{'</>'}</h2>
              <h3>{conv.puesto}</h3>
              <h3>{conv.tipoTrabajo}</h3>
              <h3>{conv.ubicacion}</h3>
              <h3>{conv.horario}</h3>
              <h3>{conv.salario}</h3>
              
              {/* Enlace a la sección principal */}
              <a href="#convocatoria" rel='noreferrer'>Más información</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
