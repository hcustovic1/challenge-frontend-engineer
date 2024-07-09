import { Checkpoint as CheckpointType } from '../../types';
import styles from './Checkpoint.module.css';

interface CheckpointProps {
  checkpoint: CheckpointType;
  isLatest: boolean;
}

export const Checkpoint: React.FC<CheckpointProps> = ({
  checkpoint,
  isLatest,
}) => (
  <article
    className={`${styles.checkpoint} ${
      isLatest ? styles.latestCheckpoint : ''
    }`}
    aria-labelledby={`status-${checkpoint.event_timestamp}`}
  >
    <header>
      <h3 id={`status-${checkpoint.event_timestamp}`}>{checkpoint.status}</h3>
    </header>
    <p>{checkpoint.status_details}</p>
    <p>
      <time dateTime={checkpoint.event_timestamp}>
        {new Date(checkpoint.event_timestamp).toLocaleString()}
      </time>
    </p>
    <p>
      <span>
        {checkpoint.city}, {checkpoint.country_iso3}
      </span>
    </p>
    {checkpoint.meta?.pickup_address && (
      <p>
        <span>Pickup Address: {checkpoint.meta.pickup_address}</span>
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
  </article>
);
