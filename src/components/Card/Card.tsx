import { ReactNode } from 'react';
import styles from './Card.module.css';

interface CardProps {
  children: ReactNode;
  title: string;
}

export const Card: React.FC<CardProps> = ({ children, title }) => {
  return (
    <section className={styles.card} aria-labelledby="cardTitle">
      <header className={styles.cardHeader}>
        <h2 id="cardTitle" className={styles.cardTitle}>
          {title}
        </h2>
      </header>
      <hr className={styles.separator} />
      <div className={styles.cardContent}>{children}</div>
    </section>
  );
};
