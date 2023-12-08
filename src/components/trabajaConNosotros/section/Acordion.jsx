import './Acordion.css'
import Team from '../info/Team.json';

const Carousel = () => {
    const images = [
        '../../../../public/img/TrabajaConNosotros/exposicion.webp',
        '../../../../public/img/TrabajaConNosotros/fila-1-columna-1-1.webp',
        '../../../../public/img/TrabajaConNosotros/fila-1-columna-2.webp',
        '../../../../public/img/TrabajaConNosotros/fila-1-columna-3.webp',
        '../../../../public/img/TrabajaConNosotros/team3.webp',
        '../../../../public/img/TrabajaConNosotros/unnamed.jpg',
    ];

    return (
        <div>
            <div className='column-f title-n'>
                <strong>{Team.mensaje}</strong>
            </div>
            <div className='grid-container'>
                <div className='cont-scope-w'>
                    <div className="scope-w">
                        {images.map((image, index) => (
                            <span key={index} style={{ '--i': index + 1 }}>
                                <img src={image} alt="not found" />
                            </span>
                        ))}
                    </div>
                </div>
                <div className="section-3-w">
                    <div className="text">
                        <p>{Team.descripcion}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Carousel;
