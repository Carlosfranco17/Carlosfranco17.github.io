import './Nosotros.css';
import Info from './section/Info'
import Info2 from './section/info2';
import EquipoComponent from './section/Cards';
import Accordion from './section/Accordion';


const Nosotros = () => {
  return (
    <div>
    <Info/>
    <Accordion/>
    <EquipoComponent/>
    <Info2/>
    </div>

  )
}

export default Nosotros