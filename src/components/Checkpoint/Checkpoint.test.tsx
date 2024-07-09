import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Checkpoint } from './Checkpoint';
import { mockCheckpointA } from '../../__mocks__';

describe('Checkpoint Component', () => {
  it('renders the status correctly', () => {
    const { getByRole } = render(
      <Checkpoint checkpoint={mockCheckpointA} isLatest={false} />
    );

    const heading = getByRole('heading', { level: 3, name: /delivered/i });
    expect(heading).toBeInTheDocument();
  });

  it('renders the status details correctly', () => {
    const { getByText } = render(
      <Checkpoint checkpoint={mockCheckpointA} isLatest={false} />
    );

    expect(getByText(/your package has been delivered/i)).toBeInTheDocument();
  });

  it('renders the timestamp correctly', () => {
    const { getByText } = render(
      <Checkpoint checkpoint={mockCheckpointA} isLatest={false} />
    );

    const date = new Date(mockCheckpointA.event_timestamp).toLocaleString();
    expect(getByText(date)).toBeInTheDocument();
  });

  it('renders the location correctly', () => {
    const { getByText } = render(
      <Checkpoint checkpoint={mockCheckpointA} isLatest={false} />
    );

    expect(getByText(/munich, deu/i)).toBeInTheDocument();
  });

  it('renders the pickup address correctly', () => {
    const { getByText } = render(
      <Checkpoint checkpoint={mockCheckpointA} isLatest={false} />
    );

    expect(getByText(/123 main st/i)).toBeInTheDocument();
  });

  it('renders the pickup address link correctly', () => {
    const { getByRole } = render(
      <Checkpoint checkpoint={mockCheckpointA} isLatest={false} />
    );

    const link = getByRole('link', { name: /view pickup location/i });
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute(
      'href',
      mockCheckpointA.meta!.pickup_address_link
    );
  });
});
