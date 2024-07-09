import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Card } from './Card';

describe('Card Component', () => {
  it('renders the title correctly', () => {
    const { getByRole } = render(<Card title="Test Title">Content</Card>);

    const heading = getByRole('heading', { level: 2, name: 'Test Title' });
    expect(heading).toBeInTheDocument();
  });

  it('renders the children correctly', () => {
    const { getByText } = render(<Card title="Test Title">Test Content</Card>);

    expect(getByText('Test Content')).toBeInTheDocument();
  });

  it('includes the separator', () => {
    const { container } = render(<Card title="Test Title">Content</Card>);

    const separator = container.querySelector('hr');
    expect(separator).toBeInTheDocument();
  });
});
