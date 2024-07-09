import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Checkpoints } from './Checkpoints';
import { mockCheckpoints } from '../../__mocks__';

describe('Checkpoints Component', () => {
  it('renders checkpoints correctly', () => {
    render(
      <Checkpoints
        checkpoints={mockCheckpoints}
        highlightLatestCheckpoint={false}
      />
    );

    expect(
      screen.getByRole('heading', { name: /delivered/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /in transit/i })
    ).toBeInTheDocument();
  });

  it('renders "No Data Available" when there are no checkpoints', () => {
    render(<Checkpoints checkpoints={[]} highlightLatestCheckpoint={false} />);

    expect(screen.getByText(/no data available/i)).toBeInTheDocument();
  });
});
