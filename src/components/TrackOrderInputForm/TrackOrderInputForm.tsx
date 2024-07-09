import { useState } from 'react';
import styles from './TrackOrderInputForm.module.css';

interface TrackOrderInputFormProps {
  heading: string;
  description?: string;
  onSubmit: (orderNumber: string, zipCode: string) => void;
}

export const TrackOrderInputForm: React.FC<TrackOrderInputFormProps> = ({
  heading,
  description,
  onSubmit,
}) => {
  const [orderNumber, setOrderNumber] = useState('');
  const [zipCode, setZipCode] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(orderNumber, zipCode);
  };

  return (
    <section className={styles.signIn} aria-labelledby="signInHeading">
      <h2 id="signInHeading">{heading}</h2>
      {description && <p>{description}</p>}
      <form onSubmit={handleSubmit}>
        <div className={styles.inputGroup}>
          <label htmlFor="orderNumber">Order Number</label>
          <input
            id="orderNumber"
            name="orderNumber"
            type="text"
            value={orderNumber}
            onChange={(e) => setOrderNumber(e.target.value)}
            required
            aria-required="true"
            aria-describedby="orderNumberDescription"
          />
          <p id="orderNumberDescription" className={styles.srOnly}>
            Please enter your order number.
          </p>
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="zipCode">Zip Code</label>
          <input
            id="zipCode"
            name="zipCode"
            type="text"
            value={zipCode}
            onChange={(e) => setZipCode(e.target.value)}
            required
            aria-required="true"
            aria-describedby="zipCodeDescription"
          />
          <p id="zipCodeDescription" className={styles.srOnly}>
            Please enter your zip code.
          </p>
        </div>

        <button type="submit">Submit</button>
      </form>
    </section>
  );
};
