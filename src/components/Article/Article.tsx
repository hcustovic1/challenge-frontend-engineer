import styles from './Article.module.css';
import { Article as ArticleType } from '../../types';
import placeholderImage from '../../assets/no-image-placeholder.jpg';

interface ArticleProps {
  article: ArticleType;
}

export const Article: React.FC<ArticleProps> = ({ article }) => {
  const imageUrl = article.articleImageUrl || placeholderImage;

  return (
    <article className={styles.article}>
      <img
        src={imageUrl}
        alt={
          article.articleImageUrl ? article.articleName : 'No image available'
        }
        className={styles.articleImage}
      />
      <div className={styles.articleDetails}>
        <h2 className={styles.articleName}>{article.articleName}</h2>
        <p className={styles.articleNumber}>
          Article Number: {article.articleNo}
        </p>
        <p className={styles.articlePrice}>
          <strong>${article.price.toFixed(2)}</strong>
        </p>
        <p className={styles.articleQuantity}>Quantity: {article.quantity}</p>
      </div>
    </article>
  );
};
