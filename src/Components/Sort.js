import React, { useState, useRef } from "react";
import SortButton from "./SortComponents/SortButton";

export default function Sort({ articleMode_state, setIterate, isSortFixed }) {
  const setArticleMode = articleMode_state.setArticleMode;
  const articleMode = articleMode_state.articleMode;
  const [selected, setSelected] = useState("new");
  const fixedEffect = " p-4 bg-white fixed w-full z-10 shadow-xl";

  return (
    <div
      className={` flex justify-between ${isSortFixed ? fixedEffect : "m-6"}`}
    >
      <div className="flex space-x-2">
        {/* 
      Changes the stories category to New
      Reset Iterate to zero if a different button is clicked
      */}
        <SortButton
          selectedValue="new"
          selected_State={{ selected, setSelected }}
          setArticleMode={setArticleMode}
          currArticleMode={articleMode}
          articleMode="newstories"
          setIterate={setIterate}
        >
          New
        </SortButton>

        {/* 
      Changes the stories category to Past 
      Reset Iterate to zero if a different button is clicked 
      */}
        <SortButton
          selectedValue="past"
          selected_State={{ selected, setSelected }}
          setArticleMode={setArticleMode}
          currArticleMode={articleMode}
          articleMode="beststories"
          setIterate={setIterate}
        >
          Best
        </SortButton>

        {/* 
      Changes the stories category to Top  
      Reset Iterate to zero if a different button is clicked
      */}
        <SortButton
          selectedValue="top"
          selected_State={{ selected, setSelected }}
          setArticleMode={setArticleMode}
          currArticleMode={articleMode}
          articleMode="topstories"
          setIterate={setIterate}
        >
          Top
        </SortButton>
      </div>

      {isSortFixed && (
        <a
          href="#topsection"
          className={"hover:text-yellow-500 text-xl font-extrabold text-black"}
        >
          ↑
        </a>
      )}
    </div>
  );
}
