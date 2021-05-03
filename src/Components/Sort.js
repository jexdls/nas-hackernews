import React, { useState } from "react";
import SortButton from "./SortComponents/SortButton";

export default function Sort() {
  const [selected, setSelected] = useState("new");

  // Set color of border bottom to corresponding color based on selected string
  const selectedEffect = selected == "new" ? " x-border-pri " : " x-border-g ";

  return (
    <div className={`flex m-4 space-x-3 border-b-4 ${selectedEffect}`}>
      <SortButton
        selectedValue="new"
        specialClassName="x-bg-color-pri"
        selected_State={{ selected, setSelected }}
      >
        New
      </SortButton>

      <SortButton
        selectedValue="past"
        specialClassName="x-bg-color-g"
        selected_State={{ selected, setSelected }}
      >
        Past
      </SortButton>
    </div>
  );
}
