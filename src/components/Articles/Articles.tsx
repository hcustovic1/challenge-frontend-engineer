import { Article } from '../../types';

interface ArticlesProps {
  articles: Article[];
}

export const Articles: React.FC<ArticlesProps> = ({ articles }) => (
  <section>
    <h2>Articles</h2>
    {articles.map((article, index) => (
      <div key={index} className="article">
        {/* <img src={article.articleImageUrl || ''} alt={article.articleName} /> */}
        <p>
          <strong>Article Number:</strong> {article.articleNo}
        </p>
        <p>
          <strong>Name:</strong> {article.articleName}
        </p>
        <p>
          <strong>Quantity:</strong> {article.quantity}
        </p>
        <p>
          <strong>Price:</strong> ${article.price.toFixed(2)}
        </p>
      </div>
    ))}
  </section>
);
