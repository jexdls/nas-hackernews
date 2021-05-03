import React, { useState } from "react";

export default function Load() {
  const hoverEffect =
    "hover:shadow-lg transform hover:scale-105 transition duration-300";

  return (
    <div className="flex w-full">
      <button
        className={`w-full m-4 p-4 rounded-lg text-center font-bold x-bg-color-pri focus:outline-none ${hoverEffect}`}
      >
        Load More
      </button>
    </div>
  );
}
