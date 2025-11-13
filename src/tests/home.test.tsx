import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Home from '@/app/page';

describe('Home', () => {
  it('renders Hello World headline', () => {
    render(<Home />);
    expect(screen.getByRole('heading', { name: /hello world/i })).toBeInTheDocument();
  });
});
