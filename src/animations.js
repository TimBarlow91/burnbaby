export const fadeUpInOut = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
    exit: { opacity: 0, y: -60, transition: { duration: 0.6, ease: "easeIn" } },
};

export const fadeLeftRight = {
    hidden: { opacity: 0, x: -80 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
    exit: { opacity: 0, x: 80, transition: { duration: 0.6, ease: "easeIn" } },
};

export const flipFade = {
    hidden: { opacity: 0, rotateY: 90 },
    visible: { opacity: 1, rotateY: 0, transition: { duration: 1, ease: "easeOut" } },
    exit: { opacity: 0, rotateY: -90, transition: { duration: 0.8, ease: "easeIn" } },
};

export const spinCoin = {
    hidden: { opacity: 0, rotateY: 180, scale: 0.8 },
    visible: { opacity: 1, rotateY: 0, scale: 1, transition: { duration: 1, ease: "easeOut" } },
    exit: { opacity: 0, rotateY: -180, scale: 0.8, transition: { duration: 0.8, ease: "easeIn" } },
};

export const flipIn = {
    hidden: { opacity: 0, rotateX: 90 },
    visible: { opacity: 1, rotateX: 0, transition: { duration: 0.8, ease: "easeOut" } },
    exit: { opacity: 0, rotateX: -90, transition: { duration: 0.8, ease: "easeIn" } },
};

// export { motion };