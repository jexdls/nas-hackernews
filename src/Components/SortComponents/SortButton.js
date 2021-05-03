export default function SortButton({
  children,
  selectedValue,
  selected_State,
  specialClassName,
}) {
  const selected = selected_State.selected;
  const setSelected = selected_State.setSelected;

  const hoverEffect =
    "hover:shadow-sm transform hover:scale-105 transition duration-100";

  // set button shape to pill if not selected or D shaped if selected
  const selectedEffect =
    selected == selectedValue ? "rounded-t-xl" : "rounded-full";

  return (
    <button
      onClick={() => setSelected(selectedValue)}
      className={`py-0.5 px-3 font-bold focus:outline-none ${specialClassName} ${hoverEffect} ${selectedEffect} `}
    >
      {children}
    </button>
  );
}
