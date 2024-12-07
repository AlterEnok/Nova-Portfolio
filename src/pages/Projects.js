
import React from 'react';
import Project from '../components/project/Project';
import { projects } from '../helpers/projectsList';

const Projects = () => {
    return (
        <main className="section">
            <div className="container">
                <h2 className="title-1">Projects</h2>
                <ul className="projects">
                    {projects.map((project, index) => {
                        return (
                            <Project
                                key={project.id}
                                title={project.title}
                                img={project.img}
                                index={index}
                                technologies={project.technologies}
                            />
                        );
                    })}
                </ul>
            </div>
        </main>
    );
}

export default Projects;

