import React from 'react';
import Project from '../components/project/Project';
import { projects } from '../helpers/projectsList';
import AnimatedPage from '../components/SmoothPage/smooth.js';
import Sparkle from '../components/Sparkle/sparkle.js';
import { motion } from 'framer-motion';


const Projects = () => {
    const conceptProjects = projects.filter(p => p.type !== 'commercial');
    const commercialProjects = projects.filter(p => p.type === 'commercial');

    return (
        <AnimatedPage>
            <main className="section">
                <div className="container">
                    <motion.h2
                        className="title-1"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
                        viewport={{ once: true }}
                    >
                        Concept Projects
                    </motion.h2>
                    <ul className="projects">
                        {conceptProjects.map((project, index) => (
                            <Project
                                key={project.id}
                                title={project.title}
                                img={project.img}
                                id={project.id}
                                technologies={project.technologies}
                                index={index}
                            />
                        ))}
                    </ul>


                    {commercialProjects.length > 0 && (
                        <>
                            <motion.h2
                                className="title-1"
                                style={{ marginTop: '60px' }}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
                                viewport={{ once: true }}
                            >
                                Commercial Projects
                            </motion.h2>
                            <ul className="projects">
                                {commercialProjects.map((project, index) => (
                                    <Project
                                        key={project.id}
                                        title={project.title}
                                        img={project.img}
                                        id={project.id}
                                        technologies={project.technologies}
                                        index={index}
                                    />
                                ))}
                            </ul>

                        </>
                    )}

                </div>

            </main>
            <Sparkle />
        </AnimatedPage>
    );
};

export default Projects;
