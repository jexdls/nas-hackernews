import logoBlack from "../logos/logo_black.svg";

export default function Footer() {
  const imgalt = "HACKERNEWS Footer logo";
  return (
    <div className="flex w-full justify-center py-5 px-10 x-bg-color-pri">
      <div className="w-64 py-8">
        <img src={logoBlack} alt={imgalt} />
      </div>
    </div>
  );
}
