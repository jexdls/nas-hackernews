import React, { useState } from "react";
import SortButton from "./SortComponents/SortButton";

export default function Sort({ setArticleMode }) {
  const [selected, setSelected] = useState("new");

  return (
    <div className={`flex space-x-2`}>
      {/* Changes the stories category to New  */}
      <SortButton
        selectedValue="new"
        selected_State={{ selected, setSelected }}
        setArticleMode={setArticleMode}
        articleMode="newstories"
      >
        New
      </SortButton>

      {/* Changes the stories category to Past  */}
      <SortButton
        selectedValue="past"
        selected_State={{ selected, setSelected }}
        setArticleMode={setArticleMode}
        articleMode="beststories"
      >
        Past
      </SortButton>

      {/* Changes the stories category to Top  */}
      <SortButton
        selectedValue="top"
        selected_State={{ selected, setSelected }}
        setArticleMode={setArticleMode}
        articleMode="topstories"
      >
        Top
      </SortButton>
    </div>
  );
}
