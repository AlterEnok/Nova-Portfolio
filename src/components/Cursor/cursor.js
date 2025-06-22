import { useEffect, useRef, useState } from "react";

const CustomCursor = () => {
    const cursorRef = useRef(null);
    const mouse = useRef({ x: 0, y: 0 });
    const pos = useRef({ x: 0, y: 0 });
    const rafRef = useRef(null);
    const [isDesktop, setIsDesktop] = useState(true);


    const speed = 0.75;

    useEffect(() => {
        const checkScreenSize = () => {
            setIsDesktop(window.innerWidth >= 1024);
        };

        checkScreenSize();
        window.addEventListener("resize", checkScreenSize);

        return () => {
            window.removeEventListener("resize", checkScreenSize);
        };
    }, []);

    useEffect(() => {
        if (!isDesktop) return;

        const handleMouseMove = (e) => {
            mouse.current.x = e.clientX;
            mouse.current.y = e.clientY;
        };

        const followMouse = () => {
            pos.current.x += (mouse.current.x - pos.current.x) * speed;
            pos.current.y += (mouse.current.y - pos.current.y) * speed;

            if (cursorRef.current) {
                cursorRef.current.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0) translate(-50%, -50%)`;
            }

            rafRef.current = requestAnimationFrame(followMouse);
        };

        window.addEventListener("mousemove", handleMouseMove);
        rafRef.current = requestAnimationFrame(followMouse);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            if (rafRef.current) cancelAnimationFrame(rafRef.current);
        };
    }, [isDesktop]);

    if (!isDesktop) return null;

    return <div ref={cursorRef} className="custom-cursor" />;
};

export default CustomCursor;
