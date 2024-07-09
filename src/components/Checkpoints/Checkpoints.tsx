import { Checkpoint as CheckpointComponent } from '../Checkpoint/Checkpoint';
import styles from './Checkpoints.module.css';

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
  highlightLatestCheckpoint: boolean;
}

export const Checkpoints: React.FC<CheckpointsProps> = ({
  checkpoints,
  highlightLatestCheckpoint,
}) => (
  <section className={styles.checkpoints}>
    {checkpoints.length > 0 ? (
      checkpoints.map((checkpoint, index) => (
        <CheckpointComponent
          key={checkpoint.event_timestamp}
          checkpoint={checkpoint}
          isLatest={highlightLatestCheckpoint && index === 0}
        />
      ))
    ) : (
      <p>No Data Available</p>
    )}
  </section>
);
