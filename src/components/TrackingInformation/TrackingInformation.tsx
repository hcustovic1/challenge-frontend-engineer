interface TrackingInformationProps {
  trackingNumber: string;
  courier: string;
  currentStatus: string;
}

export const TrackingInformation: React.FC<TrackingInformationProps> = ({
  trackingNumber,
  courier,
  currentStatus,
}) => (
  <section>
    <h2>Tracking Information</h2>
    <p>
      <strong>Tracking Number:</strong> {trackingNumber}
    </p>
    <p>
      <strong>Courier:</strong> {courier}
    </p>
    <p>
      <strong>Current Status:</strong> {currentStatus}
    </p>
  </section>
);
