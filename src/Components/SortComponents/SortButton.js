export default function SortButton({
  children,
  selectedValue,
  selected_State,
  setArticleMode,
  articleMode,
  currArticleMode,
  setIterate,
}) {
  const selected = selected_State.selected;
  const setSelected = selected_State.setSelected;

  const hoverEffect =
    "hover:shadow-sm transform hover:scale-105 transition duration-100";

  // change color of pill button when clicked and unclicked
  const selectedEffect =
    selected === selectedValue ? " x-bg-color-pri" : " x-bg-color-g";

  return (
    <button
      onClick={() => {
        setSelected(selectedValue);
        // Changes the stories category to desired
        // Reset Iterate to zero if a different button is clicked
        if (currArticleMode !== articleMode) {
          setArticleMode(articleMode);
          setIterate(0);
        }
      }}
      className={`rounded-full py-0.5 px-3 font-bold text-md focus:outline-none ${hoverEffect} ${selectedEffect} `}
    >
      {children}
    </button>
  );
}
