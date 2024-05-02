/**
 * @vitest-environment jsdom
 */
import { render } from '@testing-library/react';
import React from 'react';
import { expect, test } from 'vitest';

import { Grid } from '../Grid';
import { GridItem } from '../GridItem';

test('gutter', () => {
  const { asFragment } = render(<Grid hasGutter />);
  expect(asFragment()).toMatchSnapshot();
});

test('alternative component', () => {
  const { asFragment } = render(
    <Grid component="ul">
      <GridItem component="li">Test</GridItem>
    </Grid>
  );
  expect(asFragment()).toMatchSnapshot();
});
