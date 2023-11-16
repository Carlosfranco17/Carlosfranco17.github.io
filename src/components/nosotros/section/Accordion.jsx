const Card = ({ className, href, iconname, title, description }) => (
    <div className={`card ${className}`}>
        <a href={href}>
            <div className="card--display">
                <i className="material-icons">{iconname}</i>
                <h2>{title}</h2>
            </div>
            <div className="card--hover">
                <h2>{title}</h2>
                <p>{description}</p>
                <p className="link">Click to see project</p>
            </div>
        </a>
        <div className="card--border"></div>
    </div>
);
