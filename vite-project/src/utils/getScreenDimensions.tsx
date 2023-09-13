export const getScreenDimensions = () => {
    const { innerWidth: width, innerHeight: height } = window;
    return { width, height };
};
