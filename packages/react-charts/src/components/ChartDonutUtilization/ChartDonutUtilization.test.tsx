/**
 * @vitest-environment jsdom
 */
import { render } from '@testing-library/react';
import React from 'react';
import { expect, test } from 'vitest';

import { ChartDonutUtilization } from './ChartDonutUtilization';

Object.values([true, false]).forEach(() => {
  test('ChartDonutUtilization', () => {
    const { asFragment } = render(<ChartDonutUtilization />);
    expect(asFragment()).toMatchSnapshot();
  });
});

test('renders component data', () => {
  const { asFragment } = render(<ChartDonutUtilization data={{ x: 'Cats', y: 35 }} height={200} width={200} />);
  expect(asFragment()).toMatchSnapshot();
});
