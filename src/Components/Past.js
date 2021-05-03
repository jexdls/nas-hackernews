import React, { useState } from "react";

export default function Past() {
  const hoverEffect =
    "hover:shadow-sm transform hover:scale-105 transition duration-100";
  return (
    <button
      className={`rounded-full py-0.5 px-3 x-bg-color-g font-bold focus:outline-none ${hoverEffect}`}
    >
      Past
    </button>
  );
}
