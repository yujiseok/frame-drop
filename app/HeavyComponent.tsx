"use client";

import { useEffect } from "react";

const HeavyComponent = () => {
  useEffect(() => {
    const blockMainThread = (ms: number) => {
      const start = performance.now();
      while (performance.now() - start < ms) {}
    };

    const interval = setInterval(() => {
      blockMainThread(50);
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed bottom-4 right-4 px-4 py-2 bg-black text-white text-sm rounded shadow">
      ⚠️ Performance hog running...
    </div>
  );
};

export default HeavyComponent;
