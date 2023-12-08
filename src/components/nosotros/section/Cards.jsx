import PropTypes from 'prop-types';
import teamData from '../text_content/team_cont';
import './Cards.css'

const EquipoCard = ({ name, role, experience, photo, url }) => (
    
    <div className="card-n" style={{ backgroundImage: `url(${photo})` }}>
        <a href={url} target="_blank" rel= "noopener noreferrer">
            <div className="card-n--display">
                <i className="material-icons">{role}</i>
                <h2>{name}</h2>
            </div>
            <div className="card-n--hover">
                <p>{experience}</p>
                <p className="link">Mas información</p>
            </div>
        </a>
        <div className="card-n--border"></div>
    </div>
);

EquipoCard.propTypes = {
    name: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    experience: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
};

const EquipoComponent = () => {
    const { teamMembers } = teamData;

    return (
    <div>
        <div className="title-n">
                <strong>Nuestro equipo</strong>
            </div>
    <div className='container'>
        <div className="card-n-container">
            {teamMembers.map((member, index) => (
                <EquipoCard key={index} {...member} />
            ))}
        </div>
    </div>
    </div>
    );
};

export default EquipoComponent;
