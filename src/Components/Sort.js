import React, { useState } from "react";
import SortButton from "./SortComponents/SortButton";

export default function Sort() {
  const [selected, setSelected] = useState("new");

  return (
    <div className={`flex space-x-2`}>
      <SortButton
        selectedValue="new"
        selected_State={{ selected, setSelected }}
      >
        New
      </SortButton>

      <SortButton
        selectedValue="past"
        selected_State={{ selected, setSelected }}
      >
        Past
      </SortButton>

      <SortButton
        selectedValue="top"
        selected_State={{ selected, setSelected }}
      >
        Top
      </SortButton>
    </div>
  );
}
