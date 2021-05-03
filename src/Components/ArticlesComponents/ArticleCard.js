import Description from "./ArticleCardComponents/Description";
import Detail from "./ArticleCardComponents/Detail";
import Header from "./ArticleCardComponents/Header";

export default function ArticleCard({ data }) {
  const hoverEffect =
    "hover:shadow-lg transform hover:scale-101 transition duration-300 cursor-pointer";
  const articleLink = "#";

  return (
    <a
      target="_blank"
      href={articleLink}
      className={`flex flex-col shadow-md m-4 p-4 rounded-xl space-y-2 ${hoverEffect}`}
    >
      <Header header={data.header} />
      <Description description={data.description} />
      <Detail timePassed={data.timePassed} commentsNum={data.commentsNum} />
    </a>
  );
}
