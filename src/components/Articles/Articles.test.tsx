import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Articles } from './Articles';
import { mockArticles } from '../../__mocks__';
import placeholderImage from '../../assets/no-image-placeholder.jpg';

describe('Articles Component', () => {
  it('renders a list of articles correctly', () => {
    const { getByText, getByAltText } = render(
      <Articles articles={mockArticles} />
    );

    expect(getByText('Sample Article 1')).toBeInTheDocument();
    expect(getByText('Article Number: 12345')).toBeInTheDocument();
    expect(getByText('$29.99')).toBeInTheDocument();
    expect(getByText('Quantity: 2')).toBeInTheDocument();

    expect(getByText('Sample Article 2')).toBeInTheDocument();
    expect(getByText('Article Number: 67890')).toBeInTheDocument();
    expect(getByText('$59.99')).toBeInTheDocument();
    expect(getByText('Quantity: 1')).toBeInTheDocument();

    const image = getByAltText('Sample Article 2') as HTMLImageElement;
    expect(image.src).toContain('https://example.com/image2.jpg');

    const noImage = getByAltText('No image available') as HTMLImageElement;
    expect(noImage.src).toContain(placeholderImage);
  });

  it('renders correctly with no articles', () => {
    const { container } = render(<Articles articles={[]} />);
    expect(container.querySelector('section')?.childElementCount).toBe(0);
  });
});
