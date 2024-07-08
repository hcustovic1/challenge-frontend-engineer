import React from 'react';
import styles from './TrackOrderInputPage.module.css';
import { TrackOrderInputForm } from '../../components';

export const TrackOrderInputPage: React.FC = () => {
  const submitFormTEST = (orderNumber: string, zipCode: string) => {
    alert(`Order number: ${orderNumber}, Zip code: ${zipCode}`);
  };

  return (
    <div className={styles.signIn}>
      <TrackOrderInputForm
        heading="Track Order"
        description="Enter your order number and zip code combination to see the order details and shipping updates"
        onSubmit={submitFormTEST}
      />
    </div>
  );
};
