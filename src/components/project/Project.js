
import { NavLink } from 'react-router-dom';
import './style.css';

const Project = ({ title, img, index, technologies }) => {
    return (
        <NavLink to={`/project/${index}`}>
            <li className="project">
                <img src={img} alt={title} className="project__img" />
                <div className="project__content">
                    <h3 className="project__title">{title}</h3>
                </div>
                <div className="project__overlay">
                    <p>
                        {technologies.map((tech, i) => (
                            <span key={i} className={tech.toLowerCase()}>{tech}</span>
                        ))}
                    </p>
                </div>
            </li>
        </NavLink>
    );
};

export default Project;
