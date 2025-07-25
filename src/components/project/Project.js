import { NavLink } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';
import './style.css';

const getAnimationDirection = (index) => {
    const directions = [
        { x: -80, y: 40 },
        { x: 80, y: -40 },
        { x: 0, y: 80 },
        { x: 0, y: -80 },
    ];
    return directions[index % directions.length];
};

const Project = ({ title, img, id, technologies, index = 0 }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });
    const controls = useAnimation();
    const [rotate, setRotate] = useState({ x: 0, y: 0 });
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        if (isInView) {
            controls.start({
                opacity: 1,
                x: 0,
                y: 0,
                scale: 1,
                transition: {
                    duration: isMobile ? 0.3 : 1.2,
                    delay: isMobile ? 0 : index * 0.2,
                    ease: [0.25, 0.1, 0.25, 1],
                },
            });
        }
    }, [isInView, controls, index, isMobile]);

    const handleMouseMove = (e) => {
        if (isMobile) return;
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const rotateX = -(y / rect.height - 0.5) * 10;
        const rotateY = (x / rect.width - 0.5) * 10;
        setRotate({ x: rotateX, y: rotateY });
    };

    const handleMouseLeave = () => {
        if (isMobile) return;
        setRotate({ x: 0, y: 0 });
    };

    const { x, y } = getAnimationDirection(index);

    return (
        <NavLink to={`/project/${id}`}>
            <motion.li
                ref={ref}
                className="project"
                initial={isMobile ? false : { opacity: 0, x, y, scale: 0.95 }}
                animate={controls}
                whileHover={!isMobile ? { scale: 1.05 } : {}}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{
                    transform: isMobile
                        ? 'none'
                        : `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
                    transition: 'transform 0.2s ease-out',
                }}
            >
                <img src={img} alt={title} className="project__img" />
                <div className="project__content">
                    <h3 className="project__title">{title}</h3>
                </div>
                <div className="project__overlay">
                    <p>
                        {technologies.map((tech, i) => (
                            <span key={i} className={tech.toLowerCase()}>
                                {tech}
                            </span>
                        ))}
                    </p>
                </div>
            </motion.li>
        </NavLink>
    );
};

export default Project;
