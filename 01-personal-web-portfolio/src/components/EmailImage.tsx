import { useEffect, useRef } from "react";

interface EmailImageProps {
  className?: string;
}

const EmailImage = ({ className = "" }: EmailImageProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    canvas.width = 220;
    canvas.height = 24;

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw email text
    ctx.font = "16px system-ui, -apple-system, sans-serif";
    ctx.fillStyle = "currentColor";
    ctx.textBaseline = "middle";
    ctx.fillText("webmaster@example.com", 0, 12);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`inline-block ${className}`}
      style={{ height: "24px", width: "220px" }}
      aria-label="Email address"
    />
  );
};

export default EmailImage;
