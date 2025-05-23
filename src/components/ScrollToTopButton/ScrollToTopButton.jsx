import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import "./ScrollToTopButton.css";

const ScrollToTopButton = () => {
const [isVisible, setIsVisible] = useState(false);

useEffect(() => {
    const handleScroll = () => {
    if (window.scrollY > 400) {
        setIsVisible(true);
    } else {
        setIsVisible(false);
    }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
}, []);

const scrollToTop = () => {
    window.scrollTo({
    top: 0,
    behavior: "smooth",
    });
};

    return (
    <button
        className={`scroll-to-top ${isVisible ? "visible" : ""}`}
        onClick={scrollToTop}
        aria-label="Scroll to top"
    >
        <FaArrowUp />
    </button>
    );
};

export default ScrollToTopButton;
