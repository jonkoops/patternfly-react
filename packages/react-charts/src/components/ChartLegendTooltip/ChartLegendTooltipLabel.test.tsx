/**
 * @vitest-environment jsdom
 */
import { render } from '@testing-library/react';
import React from 'react';
import { expect, test } from 'vitest';

import { ChartLabel } from '../ChartLabel/ChartLabel';
import { ChartLegendTooltipLabel } from './ChartLegendTooltipLabel';

Object.values([true, false]).forEach(() => {
  test('ChartLegendTooltipLabel', () => {
    const { asFragment } = render(<ChartLegendTooltipLabel legendLabelComponent={<ChartLabel id="test" />} />);
    expect(asFragment()).toMatchSnapshot();
  });
});

test('renders component text', () => {
  const legendData = [
    { name: 'Cats' },
    { name: 'Dogs', symbol: { type: 'dash' } },
    { name: 'Birds' },
    { name: 'Mice' }
  ];
  const { asFragment } = render(
    <ChartLegendTooltipLabel
      legendData={legendData}
      text={['1, 2, 3, 4']}
      legendLabelComponent={<ChartLabel id="test2" />}
      valueLabelComponent={<ChartLabel id="test3" />}
    />
  );
  expect(asFragment()).toMatchSnapshot();
});
