import { DeliveryInfo } from '../../types';
import styles from './OrderInformation.module.css';

interface OrderInformationProps {
  deliveryInfo: DeliveryInfo;
  country: string;
  zipCode: string;
}

export const OrderInformation: React.FC<OrderInformationProps> = ({
  deliveryInfo: {
    orderNo,
    order_date,
    recipient,
    street,
    city,
    region,
    announced_delivery_date,
  },
  country,
  zipCode,
}) => (
  <section
    className={styles.orderInformation}
    aria-labelledby="order-information-heading"
  >
    <dl>
      <div className={styles.detailItem}>
        <dt>Order Number:</dt>
        <dd>{orderNo}</dd>
      </div>
      <div className={styles.detailItem}>
        <dt>Order Date:</dt>
        <dd>{order_date}</dd>
      </div>
      <div className={styles.detailItem}>
        <dt>Recipient:</dt>
        <dd>{recipient}</dd>
      </div>
      <div className={styles.detailItem}>
        <dt>Address:</dt>
        <dd>
          {street}, {city}, {region}, {country}, {zipCode}
        </dd>
      </div>
      <div className={styles.detailItem}>
        <dt>Announced Delivery Date:</dt>
        <dd>{announced_delivery_date}</dd>
      </div>
    </dl>
  </section>
);
