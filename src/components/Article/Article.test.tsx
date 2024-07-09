import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Article } from './Article';
import placeholderImage from '../../assets/no-image-placeholder.jpg';
import { mockArticleA } from '../../__mocks__';

describe('Article Component', () => {
  it('renders article details correctly', () => {
    const { getByText } = render(<Article article={mockArticleA} />);

    expect(getByText('Sample Article 1')).toBeInTheDocument();
    expect(getByText('Article Number: 12345')).toBeInTheDocument();
    expect(getByText('$29.99')).toBeInTheDocument();
    expect(getByText('Quantity: 2')).toBeInTheDocument();
  });

  it('renders placeholder image when articleImageUrl is not provided', () => {
    const { getByAltText } = render(<Article article={mockArticleA} />);
    const image = getByAltText('No image available') as HTMLImageElement;

    expect(image.src).toContain(placeholderImage);
  });

  it('renders the provided image when articleImageUrl is provided', () => {
    const articleWithImage = {
      ...mockArticleA,
      articleImageUrl: 'https://example.com/image.jpg',
    };
    const { getByAltText } = render(<Article article={articleWithImage} />);
    const image = getByAltText('Sample Article 1') as HTMLImageElement;

    expect(image.src).toContain('https://example.com/image.jpg');
  });
});
