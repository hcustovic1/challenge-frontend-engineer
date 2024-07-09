import { ReactNode } from 'react';
import styles from './Card.module.css';

interface CardProps {
  children: ReactNode;
  title: string;
}

export const Card: React.FC<CardProps> = ({ children, title }) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <h2 className={styles.cardTitle}>{title}</h2>
      </div>
      <div className={styles.separator}></div>
      <div className={styles.cardContent}>{children}</div>
    </div>
  );
};
