export default function Load({ iterate_state }) {
  const hoverEffect =
    "hover:shadow-lg transform hover:scale-101 transition duration-300";

  return (
    <div className="flex w-full">
      <button
        onClick={() => {
          // add 1 to iterate. meaning the times of number that Load More is clicked is added 1
          iterate_state.setIterate((curIterate) => curIterate + 1);
        }}
        className={`w-full mt-6 p-6 rounded-xl text-center font-bold text-xl x-bg-color-pri focus:outline-none ${hoverEffect}`}
      >
        Load More
      </button>
    </div>
  );
}
