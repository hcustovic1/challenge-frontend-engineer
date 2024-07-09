import { useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './TrackOrderInputPage.module.css';
import { useFetchOrder } from '../../hooks/useFetchOrder';
import { ErrorBanner, TrackOrderInputForm } from '../../components';
import { useOrderContext } from '../../context/OrderContext';
import { Loading } from '../../components/Loading/Loading';

export const TrackOrderInputPage: React.FC = () => {
  const {
    fetchOrderData,
    fetchedOrder,
    isLoadingOrderData,
    fetchOrderDataError,
    setFetchOrderDataError,
  } = useFetchOrder();
  const { setOrder: setOrderContext, order: contextOrder } = useOrderContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (fetchedOrder) {
      setOrderContext(fetchedOrder);
    }
  }, [fetchedOrder, setOrderContext]);

  useEffect(() => {
    if (contextOrder) {
      navigate(`/order/${contextOrder._id}/${contextOrder.zip_code}`);
    }
  }, [contextOrder, navigate]);

  const resetFetchOrderDataError = useCallback(() => {
    setFetchOrderDataError(null);
  }, [setFetchOrderDataError]);

  return (
    <div className={styles.trackOrderPage}>
      {!isLoadingOrderData && (
        <TrackOrderInputForm
          heading="Track Your Order"
          description="Please enter your order number and zip code to track your order."
          onSubmit={fetchOrderData}
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
