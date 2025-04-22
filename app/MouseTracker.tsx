"use client";

import { useEffect, useRef } from "react";

const MouseTracker = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const coords = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const dot = dotRef.current;
    if (!dot) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      coords.current.x = clientX;
      coords.current.y = clientY;
    };

    const animate = () => {
      dot.style.transform = `translate(${coords.current.x}px, ${coords.current.y}px)`;

      requestAnimationFrame(animate);
    };

    document.addEventListener("mousemove", handleMouseMove);
    requestAnimationFrame(animate);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className="fixed inset-0 size-4 bg-red-500 rounded-full pointer-events-none transition-transform duration-150
    ease-out"
      ref={dotRef}
    />
  );
};
export default MouseTracker;
