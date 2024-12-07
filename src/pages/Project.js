

import { useParams } from 'react-router-dom';
import { projects } from './../helpers/projectsList';
import BtnGitHub from '../components/btnGitHub/BtnGitHub';

const Project = () => {
    const { id } = useParams();
    const project = projects[id];

    return (
        <div className="container">
            <div className="project-details">
                <h1 className="title-1">{project.title}</h1>
                <img src={project.imgBig} alt="" className="project-details__cover" />
                <div className="project-details__desc">
                    <p>Skills: {project.skills}</p>
                </div>
                {project.gitHubLink && (
                    <BtnGitHub link={project.gitHubLink} />
                )}
            </div>
        </div>
    );
}

export default Project;

