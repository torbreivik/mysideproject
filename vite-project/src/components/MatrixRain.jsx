import { useRef, useEffect } from "react";

export function MatrixRain() {
    const canvasRef = useRef(null);
    let ypos = [];

    const matrix = () => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        const w = canvas.width;
        const h = canvas.height;

        // Draw a semitransparent black rectangle on top of previous drawing
        ctx.fillStyle = "#0001";
        ctx.fillRect(0, 0, w, h);

        // Set color to green and font to 15pt monospace in the drawing context
        ctx.fillStyle = "#0f0";
        ctx.font = "15pt monospace";

        ypos.forEach((y, ind) => {
            const text = String.fromCharCode(Math.random() * 128);
            const x = ind * 20;
            ctx.fillText(text, x, y);
            if (y > 100 + Math.random() * 10000) ypos[ind] = 0;
            else ypos[ind] = y + 20;
        });
    };

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        canvas.width = document.body.offsetWidth;
        canvas.height = document.body.offsetHeight;

        const cols = Math.floor(canvas.width / 20) + 1;
        ypos = Array(cols).fill(0);

        ctx.fillStyle = "#000";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        const intervalId = setInterval(matrix, 50);

        return () => clearInterval(intervalId); // Cleanup on unmount
    }, []); // Empty dependency array means this useEffect runs once when the component mounts.

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: "absolute",
                top: 0,
                left: 0,
                zIndex: 0,
            }}
        />
    );
}
