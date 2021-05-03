import { BiTimeFive } from "react-icons/bi";

const prettyMilliseconds = require("pretty-ms");

export default function Detail({ commentsNum, timePassed }) {
  // Convert milliseconds of "posted since <milliseconds>" to human readable concept of time
  const timePassedSentence = prettyMilliseconds(parseInt(timePassed), {
    compact: true,
    verbose: true,
  });

  return (
    <div className="x-color-gt font-lg pt-2 text-xs flex items-center">
      <BiTimeFive /> &nbsp;
      {timePassedSentence} &nbsp; &nbsp;| &nbsp; &nbsp;{commentsNum} comments
    </div>
  );
}
