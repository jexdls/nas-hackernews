import Description from "./ArticleCardComponents/Description";
import Detail from "./ArticleCardComponents/Detail";
import Header from "./ArticleCardComponents/Header";
import React, { useState } from "react";

export default function ArticleCard() {
  const hoverEffect =
    "hover:shadow-lg transform hover:scale-x-105 transition duration-300 cursor-pointer";

  return (
    <div
      className={`flex-column shadow-md m-4 p-4 rounded-xl space-y-2 ${hoverEffect}`}
    >
      <Header />
      <Description />
      <Detail />
    </div>
  );
}
