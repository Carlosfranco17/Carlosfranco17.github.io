import './Acordion.css';
import Work from '../info/Work.json';


const Carousel = () => {
    return (
        <div>
            <div className='column-f title'>
                <strong>{Work.mensaje}</strong>
            </div>
            <div className='grid-container'>
                <div className="section-3">
                    <div className="text">
                        <p>{Work.descripcion}</p>
                        <a href="#convocatoria" className='info-link' rel='noreferrer'>Mas información</a>
                    </div>
                </div>
                <div >
                    <div>
                            <span>
                                <img src={'../../../../public/img/TrabajaConNosotros/work-together.2ad39c2a.svg'} alt="not found" />
                            </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Carousel;
