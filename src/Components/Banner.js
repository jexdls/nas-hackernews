import logoYellow from "../logos/logo_yellow.jpg";

export default function Banner() {
  return (
    <div className="flex w-full justify-center py-5 px-10 shadow-md">
      <div className="w-64">
        <img src={logoYellow} />
      </div>
    </div>
  );
}
