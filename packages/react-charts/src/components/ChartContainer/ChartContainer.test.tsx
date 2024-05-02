/**
 * @vitest-environment jsdom
 */
import { render } from '@testing-library/react';
import React from 'react';
import { expect, test } from 'vitest';

import { ChartLabel } from '../ChartLabel/ChartLabel';
import { ChartLegend } from '../ChartLegend/ChartLegend';
import { ChartContainer } from './ChartContainer';

Object.values([true, false]).forEach(() => {
  test('ChartContainer', () => {
    const { asFragment } = render(<ChartContainer />);
    expect(asFragment()).toMatchSnapshot();
  });
});

test('renders container via ChartLegend', () => {
  const { asFragment } = render(
    <ChartContainer>
      <ChartLegend
        data={[{ name: 'Cats' }, { name: 'Dogs' }]}
        height={50}
        standalone={false}
        title="Average number of pets"
        width={200}
        labelComponent={<ChartLabel id="test" />}
      />
    </ChartContainer>
  );
  expect(asFragment()).toMatchSnapshot();
});
