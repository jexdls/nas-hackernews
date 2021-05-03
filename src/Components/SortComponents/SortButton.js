export default function SortButton({
  children,
  selectedValue,
  selected_State,
}) {
  const selected = selected_State.selected;
  const setSelected = selected_State.setSelected;

  const hoverEffect =
    "hover:shadow-sm transform hover:scale-105 transition duration-100";

  // set button shape to pill if not selected or D shaped if selected
  const selectedEffect =
    selected == selectedValue ? " x-bg-color-pri" : " x-bg-color-g";

  return (
    <button
      onClick={() => setSelected(selectedValue)}
      className={`rounded-full py-0.5 px-3 font-bold text-md focus:outline-none ${hoverEffect} ${selectedEffect} `}
    >
      {children}
    </button>
  );
}
