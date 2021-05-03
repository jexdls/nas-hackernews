import Description from "./ArticleCardComponents/Description";
import Detail from "./ArticleCardComponents/Detail";
import Header from "./ArticleCardComponents/Header";
import React, { useState } from "react";

export default function ArticleCard({ data }) {
  const hoverEffect =
    "hover:shadow-lg transform hover:scale-x-105 transition duration-300 cursor-pointer";

  return (
    <div
      className={`flex-column shadow-md m-4 p-4 rounded-xl space-y-2 ${hoverEffect}`}
    >
      <Header header={data.header} />
      <Description description={data.description} />
      <Detail timePassed={data.timePassed} commentsNum={data.commentsNum} />
    </div>
  );
}
