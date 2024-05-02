/**
 * @vitest-environment jsdom
 */
import { render } from '@testing-library/react';
import React from 'react';
import { expect, test } from 'vitest';

import { ChartArea } from '../ChartArea/ChartArea';

Object.values([true, false]).forEach(() => {
  test('ChartArea', () => {
    const { asFragment } = render(<ChartArea />);
    expect(asFragment()).toMatchSnapshot();
  });
});

test('renders component data', () => {
  const { asFragment } = render(
    <ChartArea
      data={[
        { name: 'Cats', x: 1, y: 1 },
        { name: 'Cats', x: 2, y: 2 },
        { name: 'Cats', x: 3, y: 3.2 },
        { name: 'Cats', x: 4, y: 3.5 }
      ]}
    />
  );
  expect(asFragment()).toMatchSnapshot();
});
