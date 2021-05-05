import { BiTimeFive } from "react-icons/bi";

const prettyMilliseconds = require("pretty-ms");

export default function Detail({ commentsNum, timeCreated }) {
  //GET current Unix Time. Substract today's time to timeCreated to get the time elapsed
  var currTime = Math.round(new Date().getTime() / 1000);
  let timeElapsed = currTime - timeCreated;
  let timeElapsedSentence = "";

  // Convert time to human readable time. This works onlt for 1 second and up
  if (timeElapsed > 0) {
    timeElapsedSentence = `${prettyMilliseconds(parseInt(timeElapsed * 1000), {
      compact: true,
      verbose: true,
    })} ago`;
  } else {
    timeElapsedSentence = "Just now";
  }

  return (
    <div className="x-color-gt font-lg pt-2 text-xs flex items-center">
      <BiTimeFive /> &nbsp;
      {timeElapsedSentence} &nbsp; &nbsp;| &nbsp; &nbsp;
      {commentsNum == 0
        ? "No comment"
        : `${commentsNum == 1 ? "1 comment" : `${commentsNum} comments`}`}
    </div>
  );
}
