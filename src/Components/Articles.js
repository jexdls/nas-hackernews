import ArticleCard from "./ArticleCard";

export default function Articles({ articleItems }) {
  return (
    <div>
      {/* Map through the articles JSON and generate a component for each article  */}
      {articleItems.map((item) => (
        <ArticleCard data={item} />
      ))}
    </div>
  );
}
