interface OrderInformationProps {
  orderNo: string;
  orderDate: string;
  recipient: string;
  street: string;
  city: string;
  region: string;
  country: string;
  zipCode: string;
  announcedDeliveryDate: string;
}

export const OrderInformation: React.FC<OrderInformationProps> = ({
  orderNo,
  orderDate,
  recipient,
  street,
  city,
  region,
  country,
  zipCode,
  announcedDeliveryDate,
}) => (
  <section>
    <h2>Order Information</h2>
    <p>
      <strong>Order Number:</strong> {orderNo}
    </p>
    <p>
      <strong>Order Date:</strong> {orderDate}
    </p>
    <p>
      <strong>Recipient:</strong> {recipient}
    </p>
    <p>
      <strong>Address:</strong> {street}, {city}, {region}, {country}, {zipCode}
    </p>
    <p>
      <strong>Announced Delivery Date:</strong> {announcedDeliveryDate}
    </p>
  </section>
);
