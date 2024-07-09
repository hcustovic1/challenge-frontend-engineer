import { useCallback } from 'react';
import styles from './TrackOrderInputPage.module.css';
import {
  useFetchOrderFromAPI,
  useResetError,
  useNavigateAfterOrderFetch,
} from '../../hooks';
import { ErrorBanner, TrackOrderInputForm, Loading } from '../../components';

export const TrackOrderInputPage: React.FC = () => {
  const {
    fetchOrderData,
    fetchedOrder,
    isLoadingOrderData,
    fetchOrderDataError,
    setFetchOrderDataError,
  } = useFetchOrderFromAPI();

  useNavigateAfterOrderFetch(fetchedOrder);

  const resetFetchOrderDataError = useResetError(setFetchOrderDataError);

  const handleFormSubmit = useCallback(
    (orderNumber: string, zipCode: string) => {
      resetFetchOrderDataError();
      fetchOrderData(orderNumber, zipCode);
    },
    [resetFetchOrderDataError, fetchOrderData]
  );

  return (
    <div className={styles.trackOrderPage}>
      {!isLoadingOrderData && (
        <TrackOrderInputForm
          heading="Track Your Order"
          description="Please enter your order number and zip code to track your order."
          onSubmit={handleFormSubmit}
          onInputChange={resetFetchOrderDataError}
        />
      )}

      {isLoadingOrderData && <Loading />}

      <div
        className={`${styles.errorContainer} ${
          fetchOrderDataError ? styles.showError : ''
        }`}
      >
        <ErrorBanner message={fetchOrderDataError || ''} />
      </div>
    </div>
  );
};
