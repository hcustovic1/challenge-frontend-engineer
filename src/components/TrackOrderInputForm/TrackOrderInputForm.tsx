import { memo, useCallback, useEffect, useState } from 'react';
import styles from './TrackOrderInputForm.module.css';

interface TrackOrderInputFormProps {
  heading: string;
  description?: string;
  onSubmit: (orderNumber: string, zipCode: string) => void;
  onInputChange: () => void;
}

const TrackOrderInputForm: React.FC<TrackOrderInputFormProps> = ({
  heading,
  description,
  onSubmit,
  onInputChange,
}) => {
  const [isFormValid, setIsFormValid] = useState(false);
  const [orderNumber, setOrderNumber] = useState('');
  const [zipCode, setZipCode] = useState('');

  const handleOrderNumberChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setOrderNumber(e.target.value);
      onInputChange();
    },
    [onInputChange]
  );

  const handleZipCodeChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setZipCode(e.target.value);
      onInputChange();
    },
    [onInputChange]
  );

  const handleSubmit = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      onSubmit(orderNumber, zipCode);
    },
    [onSubmit, orderNumber, zipCode]
  );

  useEffect(() => {
    setIsFormValid(orderNumber.trim() !== '' && zipCode.trim() !== '');
  }, [orderNumber, zipCode]);

  return (
    <section className={styles.signIn} aria-labelledby="signInHeading">
      <h2 id="signInHeading" className={styles.heading}>
        {heading}
      </h2>

      {description && <p className={styles.description}>{description}</p>}

      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.inputGroup}>
          <label htmlFor="orderNumber" className={styles.label}>
            Order Number
          </label>
          <input
            id="orderNumber"
            name="orderNumber"
            type="text"
            value={orderNumber}
            onChange={handleOrderNumberChange}
            required
            aria-required="true"
            aria-describedby="orderNumberDescription"
            className={styles.input}
          />
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="zipCode" className={styles.label}>
            Zip Code
          </label>
          <input
            id="zipCode"
            name="zipCode"
            type="text"
            value={zipCode}
            onChange={handleZipCodeChange}
            required
            aria-required="true"
            aria-describedby="zipCodeDescription"
            className={styles.input}
          />
        </div>

        <button type="submit" className={styles.button} disabled={!isFormValid}>
          Submit
        </button>
      </form>
    </section>
  );
};

export const MemoizedTrackOrderInputForm = memo(TrackOrderInputForm);
