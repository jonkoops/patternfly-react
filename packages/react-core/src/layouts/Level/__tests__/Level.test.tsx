/**
 * @vitest-environment jsdom
 */
import { render } from '@testing-library/react';
import React from 'react';
import { expect, test } from 'vitest';

import { Level } from '../Level';
import { LevelItem } from '../LevelItem';

test('Gutter', () => {
  const { asFragment } = render(<Level hasGutter />);
  expect(asFragment()).toMatchSnapshot();
});

test('item', () => {
  const { asFragment } = render(<LevelItem>Level Item</LevelItem>);
  expect(asFragment()).toMatchSnapshot();
});
