export default function Description({ description }) {
  // only display the first <maxChar> characters of the description
  const maxChar = 200;
  const truncated =
    description.length > maxChar
      ? description.slice(0, maxChar).concat("...")
      : description;
  return <div className="x-color-bt text-sm">{truncated}</div>;
}
