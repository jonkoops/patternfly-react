/**
 * @vitest-environment jsdom
 */
import { render } from '@testing-library/react';
import React from 'react';
import { describe, expect, test } from 'vitest';

import { LoginMainFooter } from '../LoginMainFooter';

describe('LoginMainFooter', () => {
  test('renders with PatternFly Core styles', () => {
    const { asFragment } = render(<LoginMainFooter />);
    expect(asFragment()).toMatchSnapshot();
  });

  test('className is added to the root element', () => {
    const { asFragment } = render(<LoginMainFooter className="extra-class" />);
    expect(asFragment()).toMatchSnapshot();
  });
});
