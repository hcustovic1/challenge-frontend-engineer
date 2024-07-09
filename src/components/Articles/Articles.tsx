import React from 'react';
import { Article as ArticleComponent } from '../Article/Article';
import { Article } from '../../types';

interface ArticlesProps {
  articles: Article[];
}

export const Articles: React.FC<ArticlesProps> = ({ articles }) => (
  <section>
    {articles.map((article) => (
      <ArticleComponent key={article.articleNo} article={article} />
    ))}
  </section>
);
