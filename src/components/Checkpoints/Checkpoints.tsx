interface CheckpointMeta {
  pickup_address?: string;
  pickup_address_link?: string;
}

interface Checkpoint {
  status: string;
  status_details: string;
  event_timestamp: string;
  city: string;
  country_iso3: string;
  meta?: CheckpointMeta;
}

interface CheckpointsProps {
  checkpoints: Checkpoint[];
}

export const Checkpoints: React.FC<CheckpointsProps> = ({ checkpoints }) => (
  <section>
    <h2>Checkpoints</h2>
    {checkpoints.map((checkpoint, index) => (
      <div key={index} className="checkpoint">
        <p>
          <strong>Status:</strong> {checkpoint.status}
        </p>
        <p>
          <strong>Details:</strong> {checkpoint.status_details}
        </p>
        <p>
          <strong>Timestamp:</strong>{' '}
          {new Date(checkpoint.event_timestamp).toLocaleString()}
        </p>
        <p>
          <strong>Location:</strong> {checkpoint.city},{' '}
          {checkpoint.country_iso3}
        </p>
        {checkpoint.meta?.pickup_address && (
          <p>
            <strong>Pickup Address:</strong> {checkpoint.meta.pickup_address}
          </p>
        )}
        {checkpoint.meta?.pickup_address_link && (
          <p>
            <a
              href={checkpoint.meta.pickup_address_link}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Pickup Location
            </a>
          </p>
        )}
      </div>
    ))}
  </section>
);
