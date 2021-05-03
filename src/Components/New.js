import React, { useState } from "react";

export default function New() {
  const hoverEffect =
    "hover:shadow-sm transform hover:scale-105 transition duration-100";
  return (
    <button
      className={`rounded-full py-0.5 px-3 x-bg-color-pri font-bold focus:outline-none ${hoverEffect}`}
    >
      New
    </button>
  );
}
