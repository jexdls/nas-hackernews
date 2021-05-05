export default function Load() {
  const hoverEffect =
    "hover:shadow-lg transform hover:scale-101 transition duration-300";

  return (
    <div className="flex w-full">
      <button
        className={`w-full mt-6 p-6 rounded-xl text-center font-bold text-xl x-bg-color-pri focus:outline-none ${hoverEffect}`}
      >
        Load More
      </button>
    </div>
  );
}
