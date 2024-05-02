/**
 * @vitest-environment jsdom
 */
import { render } from '@testing-library/react';
import React from 'react';
import { expect, test } from 'vitest';

import { ChartBulletComparativeMeasure } from './ChartBulletComparativeMeasure';

Object.values([true, false]).forEach(() => {
  test('ChartBulletComparativeMeasure', () => {
    const { asFragment } = render(<ChartBulletComparativeMeasure />);
    expect(asFragment()).toMatchSnapshot();
  });
});

test('renders component data', () => {
  const { asFragment } = render(
    <ChartBulletComparativeMeasure data={[{ y: 100 }]} domain={{ x: [0, 200] }} width={450} />
  );
  expect(asFragment()).toMatchSnapshot();
});
