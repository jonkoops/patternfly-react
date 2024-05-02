/**
 * @vitest-environment jsdom
 */
import { render } from '@testing-library/react';
import React from 'react';
import { expect, test } from 'vitest';

import { ToggleGroupItemElement, ToggleGroupItemVariant } from '../ToggleGroupItemElement';

test('text variant', () => {
  const { asFragment } = render(
    <ToggleGroupItemElement variant={ToggleGroupItemVariant.text}>Test</ToggleGroupItemElement>
  );
  expect(asFragment()).toMatchSnapshot();
});

test('icon variant', () => {
  const { asFragment } = render(
    <ToggleGroupItemElement variant={ToggleGroupItemVariant.icon}>ICON</ToggleGroupItemElement>
  );
  expect(asFragment()).toMatchSnapshot();
});

test('empty', () => {
  const { asFragment } = render(<ToggleGroupItemElement />);
  expect(asFragment()).toMatchSnapshot();
});
