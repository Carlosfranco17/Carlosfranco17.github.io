import PropTypes from 'prop-types';
import teamData from '../text_content/team_cont';

const EquipoCard = ({ name, role, experience, photo }) => (
    <div className="card">
        <div className="face face1">
            <img src={photo} alt={name} />
            <div className="content">
                <h3>{name}<br /><h4>{role}</h4></h3>
            </div>
        </div>
        <div className="face face2">
            <div className="content">
                <p>{experience}</p>
                <a href="#">Más Información</a>
            </div>
        </div>
    </div>
);

EquipoCard.propTypes = {
    name: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    experience: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
};

const EquipoComponent = () => {
    const { teamMembers } = teamData;

    return (
        <div>
            <div className="title">
                <strong>Nuestro equipo</strong>
            </div>
            <div className="container">
                {teamMembers.map((member, index) => (
                    <EquipoCard key={index} {...member} />
                ))}
            </div>
        </div>
    );
};

export default EquipoComponent;
