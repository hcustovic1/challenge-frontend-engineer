import React from 'react';
import styles from './Checkpoint.module.css';

interface CheckpointMeta {
  pickup_address?: string;
  pickup_address_link?: string;
}

interface CheckpointProps {
  checkpoint: {
    status: string;
    status_details: string;
    event_timestamp: string;
    city: string;
    country_iso3: string;
    meta?: CheckpointMeta;
  };
  isLatest: boolean;
}

export const Checkpoint: React.FC<CheckpointProps> = ({
  checkpoint,
  isLatest,
}) => (
  <div
    className={`${styles.checkpoint} ${
      isLatest ? styles.latestCheckpoint : ''
    }`}
  >
    <strong>{checkpoint.status}</strong>
    <p>{checkpoint.status_details}</p>
    <p>
      <strong>Timestamp:</strong>{' '}
      {new Date(checkpoint.event_timestamp).toLocaleString()}
    </p>
    <p>
      <strong>Location:</strong> {checkpoint.city}, {checkpoint.country_iso3}
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
);
