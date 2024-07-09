import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { OrderInformation } from './OrderInformation';
import { mockDeliveryInfo } from '../../__mocks__';

describe('OrderInformation Component', () => {
  it('renders order information correctly', () => {
    render(
      <OrderInformation
        deliveryInfo={mockDeliveryInfo}
        country="Germany"
        zipCode="80331"
      />
    );

    expect(screen.getByText(/12345/)).toBeInTheDocument();
    expect(screen.getByText(/2023-07-07/)).toBeInTheDocument();
    expect(screen.getByText(/john doe/i)).toBeInTheDocument();
    expect(screen.getByText(/123 main st/i)).toBeInTheDocument();
    expect(screen.getByText(/munich/i)).toBeInTheDocument();
    expect(screen.getByText(/bavaria/i)).toBeInTheDocument();
    expect(screen.getByText(/germany/i)).toBeInTheDocument();
    expect(screen.getByText(/80331/i)).toBeInTheDocument();
    expect(screen.getByText(/2023-07-10/i)).toBeInTheDocument();
  });

  it('renders a description list (dl) for order details', () => {
    const { container } = render(
      <OrderInformation
        deliveryInfo={mockDeliveryInfo}
        country="Germany"
        zipCode="80331"
      />
    );

    expect(container.querySelector('dl')).toBeInTheDocument();
    expect(container.querySelector('dt')).toBeInTheDocument();
    expect(container.querySelector('dd')).toBeInTheDocument();
  });
});
