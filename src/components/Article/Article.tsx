import React from 'react';
import styles from './Article.module.css';
import { Article as ArticleType } from '../../types';
import placeholderImage from '../../assets/no-image-placeholder.jpg';

interface ArticleProps {
  article: ArticleType;
}

export const Article: React.FC<ArticleProps> = ({ article }) => {
  const imageUrl = article.articleImageUrl || placeholderImage;

  return (
    <div className={styles.article}>
      <img
        src={imageUrl}
        alt={article.articleName}
        className={styles.articleImage}
      />
      <div className={styles.articleDetails}>
        <p className={styles.articleText}>
          <strong>{article.articleName}</strong> ({article.articleNo})
        </p>
        <strong className={styles.articleText}>
          ${article.price.toFixed(2)}
        </strong>
        <p className={styles.articleText}>Qty: {article.quantity}</p>
      </div>
    </div>
  );
};
