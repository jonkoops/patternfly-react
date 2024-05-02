/**
 * @vitest-environment jsdom
 */
import { render } from '@testing-library/react';
import React from 'react';
import { expect, test } from 'vitest';

import { ChartLabel } from './ChartLabel';

Object.values([true, false]).forEach(() => {
  test('ChartLabel', () => {
    const { asFragment } = render(<ChartLabel id="test" />);
    expect(asFragment()).toMatchSnapshot();
  });
});

test('renders component text', () => {
  const { asFragment } = render(<ChartLabel text="This is a test" id="test2" />);
  expect(asFragment()).toMatchSnapshot();
});
