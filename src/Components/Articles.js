import ArticleCard from "./ArticlesComponents/ArticleCard";

export default function Articles({ articleItems }) {
  // B takes precedence before A when sorting. So, this sorting method is from low to high
  articleItems.sort((a, b) =>
    parseInt(a.timePassed) > parseInt(b.timePassed) ? 1 : -1
  );

  return (
    <div className="mt-6 space-y-6">
      {/* Map through the articles JSON and generate a <ArticleCard/> component for each article  */}
      {articleItems.map((item) => (
        <ArticleCard data={item} key={item.id} />
      ))}
    </div>
  );
}
