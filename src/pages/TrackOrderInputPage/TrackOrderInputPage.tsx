import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './TrackOrderInputPage.module.css';
import { useFetchOrder } from '../../hooks/useFetchOrder';
import { ErrorBanner, TrackOrderInputForm } from '../../components';
import { useOrderContext } from '../../context/OrderContext';
import { Loading } from '../../components/Loading/Loading';

export const TrackOrderInputPage: React.FC = () => {
  const { fetchOrderData, order, isLoading, error } = useFetchOrder();
  const { setOrder: setOrderContext, order: contextOrder } = useOrderContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (order) {
      setOrderContext(order);
    }
  }, [order, setOrderContext]);

  useEffect(() => {
    if (contextOrder) {
      navigate(`/order/${contextOrder._id}/${contextOrder.zip_code}`);
    }
  }, [contextOrder, navigate]);

  return (
    <div className={styles.trackOrderPage}>
      {!isLoading && (
        <TrackOrderInputForm
          heading="Track Your Order"
          description="Please enter your order number and zip code to track your order."
          onSubmit={fetchOrderData}
        />
      )}

      {isLoading && <Loading />}

      <div
        className={`${styles.errorContainer} ${error ? styles.showError : ''}`}
      >
        <ErrorBanner message={error || ''} />
      </div>
    </div>
  );
};
