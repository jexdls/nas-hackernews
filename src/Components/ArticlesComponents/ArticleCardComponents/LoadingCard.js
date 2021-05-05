export default function LoadingCard() {
  return (
    <div className="mt-6 p-6 animate-pulse rounded-xl w-full flex flex-col h-36 shadow-lg space-y-2 x-bg-color-g">
      <div className="w-1/2 h-1/4 bg-gray-200 rounded-xl"></div>
      <div className="w-full h-1/4 bg-gray-200 rounded-xl"></div>
      <div className="w-1/6 h-1/4 bg-gray-200 rounded-xl"></div>
      <div className="w-1/4 h-1/4 bg-gray-200 rounded-xl"></div>
    </div>
  );
}
