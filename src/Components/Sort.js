import React, { useState } from "react";
import SortButton from "./SortComponents/SortButton";

export default function Sort({ articleMode_state, setIterate }) {
  const setArticleMode = articleMode_state.setArticleMode;
  const articleMode = articleMode_state.articleMode;
  const [selected, setSelected] = useState("new");

  return (
    <div className={`flex space-x-2`}>
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
  );
}
