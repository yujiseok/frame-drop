"use client";

import { useState } from "react";
import HeavyComponent from "./HeavyComponent";
import MouseTracker from "./MouseTracker";

const Page = () => {
  const [showHeavy, setShowHeavy] = useState(false);

  return (
    <>
      <MouseTracker />
      <div className="p-8 space-y-4">
        <h1 className="text-2xl font-bold">60fps Test Demo</h1>
        <p>
          Move your mouse around. Toggle the heavy component to simulate frame
          drops.
        </p>

        <button
          className="px-4 py-2 bg-blue-600 text-white rounded shadow hover:bg-blue-700"
          onClick={() => setShowHeavy(!showHeavy)}
        >
          {showHeavy ? "🔋 Disable Heavy Load" : "🔥 Enable Heavy Load"}
        </button>
      </div>

      {showHeavy && <HeavyComponent />}
    </>
  );
};
export default Page;
