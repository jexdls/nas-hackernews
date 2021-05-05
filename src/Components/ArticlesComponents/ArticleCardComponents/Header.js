import SubHeader from "./SubHeader";

export default function Header({ header, userName }) {
  return (
    <div className="flex flex-col -space-y-0.5">
      <div className="x-color-bt font-bold text-lg ">{header}</div>
      <SubHeader userName={userName} />
    </div>
  );
}
