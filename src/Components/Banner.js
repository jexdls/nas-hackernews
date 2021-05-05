import logoYellow from "../logos/logo_yellow.jpg";

export default function Banner({ elRef }) {
  const imgalt = "HACKERNEWS. Banner";
  return (
    <div
      id="topsection"
      className="flex w-full justify-center py-5 px-10 shadow-md"
    >
      <div ref={elRef} className="w-64">
        <img src={logoYellow} alt={imgalt} />
      </div>
    </div>
  );
}
