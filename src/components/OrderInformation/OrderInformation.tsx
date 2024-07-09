import { DeliveryInfo } from '../../types';

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
  <section>
    <p>
      <strong>Order Number:</strong> {orderNo}
    </p>
    <p>
      <strong>Order Date:</strong> {order_date}
    </p>
    <p>
      <strong>Recipient:</strong> {recipient}
    </p>
    <p>
      <strong>Address:</strong> {street}, {city}, {region}, {country}, {zipCode}
    </p>
    <p>
      <strong>Announced Delivery Date:</strong> {announced_delivery_date}
    </p>
  </section>
);
