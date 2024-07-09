import { useParams } from 'react-router-dom';
import { useManageOrderData } from '../../hooks';
import styles from './OrderDetailsPage.module.css';
import {
  Articles,
  Checkpoints,
  OrderInformation,
  Card,
  Loading,
  ErrorBanner,
} from '../../components';

export const OrderDetailsPage: React.FC = () => {
  const { orderNumber, zipCode } = useParams<{
    orderNumber: string;
    zipCode: string;
  }>();
  const { isLoadingOrderData, fetchOrderDataError, contextOrder } =
    useManageOrderData(orderNumber!, zipCode!);

  if (isLoadingOrderData) {
    return <Loading />;
  }

  if (fetchOrderDataError) {
    return <ErrorBanner message={fetchOrderDataError} />;
  }

  if (!contextOrder) {
    return <ErrorBanner message={'No order data available.'} />;
  }

  return (
    <div className={styles.orderDetails}>
      <Card title="Status">
        <Checkpoints
          checkpoints={contextOrder.checkpoints.slice(0, 1)}
          highlightLatestCheckpoint={true}
        />
      </Card>

      <Card title="Articles">
        <Articles articles={contextOrder.delivery_info.articles} />
      </Card>

      <Card title="Order Information">
        <OrderInformation
          deliveryInfo={contextOrder.delivery_info}
          country={contextOrder.destination_country_iso3}
          zipCode={contextOrder.zip_code}
        />
      </Card>

      <Card title="History">
        <Checkpoints
          checkpoints={contextOrder.checkpoints.slice(1)}
          highlightLatestCheckpoint={false}
        />
      </Card>
    </div>
  );
};
