import PropTypes from 'prop-types';
import teamData from '../text_content/team_cont';
import './Cards.css'

const EquipoCard = ({ name, role, experience, photo, url }) => (
    
    <div className="card" style={{ backgroundImage: `url(${photo})` }}>
        <a href={url} target="_blank" rel={url ? "noopener noreferrer" : ""}>
            <div className="card--display">
                <i className="material-icons">{role}</i>
                <h2>{name}</h2>
            </div>
            <div className="card--hover">
                <p>{experience}</p>
                <p className="link">Mas información</p>
            </div>
        </a>
        <div className="card--border"></div>
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
        <div className="title">
                <strong>Nuestro equipo</strong>
            </div>
    <div className='container'>
        <div className="card-container">
            {teamMembers.map((member, index) => (
                <EquipoCard key={index} {...member} />
            ))}
        </div>
    </div>
    </div>
    );
};

export default EquipoComponent;
