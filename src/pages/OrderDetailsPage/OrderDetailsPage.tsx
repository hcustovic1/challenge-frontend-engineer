import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useOrderContext } from '../../context/OrderContext';
import styles from './OrderDetailsPage.module.css';
import { useFetchOrder } from '../../hooks';
import {
  Articles,
  Checkpoints,
  OrderInformation,
  TrackingInformation,
} from '../../components';

export const OrderDetailsPage: React.FC = () => {
  const { orderNumber, zipCode } = useParams<{
    orderNumber: string;
    zipCode: string;
  }>();
  const { order: contextOrder, setOrder: setContextOrder } = useOrderContext();
  const {
    fetchOrderData,
    fetchedOrder,
    isLoadingOrderData,
    fetchOrderDataError,
  } = useFetchOrder();
  const navigate = useNavigate();

  useEffect(() => {
    if (!orderNumber || !zipCode) {
      navigate('/');
    } else if (!contextOrder) {
      fetchOrderData(orderNumber, zipCode);
    }
  }, [orderNumber, zipCode, fetchOrderData, contextOrder, navigate]);

  useEffect(() => {
    if (fetchedOrder && !contextOrder) {
      setContextOrder(fetchedOrder);
    }
  }, [fetchedOrder, contextOrder, setContextOrder]);

  if (isLoadingOrderData) {
    return <p>Loading...</p>;
  }

  if (fetchOrderDataError) {
    return (
      <p className={styles.error} role="alert">
        {fetchOrderDataError}
      </p>
    );
  }

  if (!contextOrder) {
    return <p>No order data available.</p>;
  }

  const latestCheckpoint = contextOrder.checkpoints[0]; // Assuming the first checkpoint is the latest

  return (
    <div className={styles.orderDetails}>
      <h1>Order Details</h1>
      <TrackingInformation
        trackingNumber={contextOrder.tracking_number}
        courier={contextOrder.courier}
        currentStatus={latestCheckpoint.status}
      />
      <OrderInformation
        orderNo={contextOrder.delivery_info.orderNo}
        orderDate={contextOrder.delivery_info.order_date}
        recipient={contextOrder.delivery_info.recipient}
        street={contextOrder.delivery_info.street}
        city={contextOrder.delivery_info.city}
        region={contextOrder.delivery_info.region}
        country={contextOrder.destination_country_iso3}
        zipCode={contextOrder.zip_code}
        announcedDeliveryDate={
          contextOrder.delivery_info.announced_delivery_date
        }
      />
      <Articles articles={contextOrder.delivery_info.articles} />
      <Checkpoints checkpoints={contextOrder.checkpoints} />
    </div>
  );
};
