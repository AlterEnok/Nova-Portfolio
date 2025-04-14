import { useParams } from 'react-router-dom';
import { projects } from './../helpers/projectsList';
import BtnGitHub from '../components/btnGitHub/BtnGitHub';
import { motion } from 'framer-motion';
import Sparkle from '../components/Sparkle/sparkle.js';
import { useTranslation } from 'react-i18next';  // Импортируем хук

const Project = () => {
    const { id } = useParams();
    const { t } = useTranslation();  // Получаем функцию для перевода
    console.log(id);  // Проверяем, что за id передаётся

    const project = projects[id];

    return (

        <motion.div
            className="container"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
        >
            <motion.div
                className="project-details"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
            >
                <motion.h1
                    className="title-1"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    {project.title}
                </motion.h1>

                <motion.img
                    src={project.imgBig}
                    alt={project.title}
                    className="project-details__cover"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                />

                <motion.div
                    className="project-details__desc"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                >
                    <p>{t(project.descriptionKey)}</p>  {/* Используем ключ перевода */}
                </motion.div>

                {project.gitHubLink && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.4 }}
                    >
                        <BtnGitHub link={project.gitHubLink} />
                    </motion.div>
                )}
                <Sparkle />
            </motion.div>
        </motion.div>

    );

}


export default Project;
