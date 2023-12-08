import './Acordion.css';
import Work from '../info/Work.json';


const Carousel = () => {
    return (
        <div>
            <div className='column-f title-n'>
                <strong>{Work.mensaje}</strong>
            </div>
            <div className='grid-container'>
                <div className="section-3-w">
                    <div className="text">
                        <p>{Work.descripcion}</p>
                        <a href="#convocatoria" className='info-w' rel='noreferrer'>Mas información</a>
                    </div>
                </div>
                <div >
                    <div>
                            <span>
                                <img src={'../../../../public/img/TrabajaConNosotros/work-together.2ad39c2a.svg'} alt="not found"  style={{ width: '100%', height: 'auto' }}/>
                            </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Carousel;
